

import { createSlice } from '@reduxjs/toolkit';

export const createdPokemonSlice = createSlice({
    name: 'createdPokemon',
    initialState: {
        isLoading: false,
        createdPokemon: {},
    },
    reducers: {
        startLoadingPokemon: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemonCreated: (state, action ) => {
            state.createdPokemon = action.payload;
            state.isLoading = false
        }
      
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemonCreated } = createdPokemonSlice.actions;