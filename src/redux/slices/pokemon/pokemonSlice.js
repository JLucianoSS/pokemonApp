


import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon: {},
        isLoading: false,
    },
    reducers: {
        startLoadingPokemon: (state, /* action */ ) => {
            state.isLoading = true
        },
        setPokemon: ( state, action ) => {
            state.isLoading = false;            
            state.pokemon = action.payload.pokemon
        },
        cleanPokemon: ( state ) => {
            state.pokemon = {}
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemon, cleanPokemon  } = pokemonSlice.actions;