
import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './apis';


import { pokemonsSlice } from './slices/pokemons';
import { pokemonSlice } from './slices/pokemon';
import { paginationSlice } from './slices/pagination';
import { typesSlice } from './slices/types';
import { createdPokemonSlice } from './slices/createdPokemon/createSlice';
import { filtersSlice } from './slices/filters/filtersSlice';


export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
    pokemon: pokemonSlice.reducer,
    pagination: paginationSlice.reducer,
    types: typesSlice.reducer, 
    types: typesSlice.reducer, 
    createdPokemon: createdPokemonSlice.reducer,
    filters: filtersSlice.reducer,


    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( pokemonApi.middleware )
});