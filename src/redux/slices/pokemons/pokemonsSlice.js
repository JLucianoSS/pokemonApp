

import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        isLoading: true,

        allPokemons: [],
        appliedFilters: {
            origen: 'all',
            type: null,
            order: 'asc',
            stronger: false,
        },
    },
    reducers: {
        
        // TRAE A LOS POKEMONS
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true
        },
        setPokemons: ( state, action ) => {
            state.pokemons = action.payload.pokemons
            state.allPokemons = action.payload.pokemons
            state.isLoading = false;            
        },

        //FILTRADO DE POKEMONS
        filterByOrigen: (state, action) => {
            const  origen  = action.payload;
            state.appliedFilters.origen = origen;
            applyFilters(state);
        },
        filterByType: (state, action) => {
            const  type  = action.payload;
            state.appliedFilters.type = type;
            applyFilters(state);
        },
        orderByName: ( state, action ) => {
            const order = action.payload;
            state.pokemons.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
        
                return order === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
            });
            
        },
        orderByAttack: ( state , action ) => {
            state.appliedFilters.stronger = !state.appliedFilters.stronger;
            applyFilters(state);
        },


    }
});

// Función auxiliar para aplicar todos los filtros acumulativamente
const applyFilters = (state) => {
    const { origen, type, stronger } = state.appliedFilters;
  
    state.pokemons = state.allPokemons.filter((pokemon) => {
      const passesOrigen = origen === 'all' || (origen === 'api' && typeof pokemon.id === 'number') || (origen === 'created' && typeof pokemon.id === 'string');
      const passesType = type === 'all' || !type || pokemon.types.some((pokemonType) => pokemonType.name === type);
    //   const passesStronger = !stronger || pokemon.attack > 50; 
  
      return passesOrigen && passesType
    });

    stronger 
        ? state.pokemons.sort((a, b) => b.attack - a.attack)
        : state.pokemons.sort((a, b) => a.attack - b.attack)

  
  
    // Puedes agregar más lógica de ordenamiento si es necesario
  };


// Action creators are generated for each case reducer function
export const { 
    startLoadingPokemons, 
    setPokemons ,
    filterByOrigen,
    filterByType,
    orderByName,
    orderByAttack,
} = pokemonsSlice.actions;


