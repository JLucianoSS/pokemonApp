
import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        pokemonsPerPage: 12,
        currentPage: 1,
    },
    reducers: {
        navigateNext: (state, /* action */ ) => {
            state.currentPage += 1;
        },
        navigatePrev: (state, /* action */ ) => {
            state.currentPage -= 1;
        },
        navigatePokemonsPerPage: (state, action ) => {
            state.pokemonsPerPage = action.payload;
        },
        navigatePage: (state, action ) => {
            state.currentPage = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { navigateNext, navigatePage, navigatePokemonsPerPage, navigatePrev } = paginationSlice.actions;