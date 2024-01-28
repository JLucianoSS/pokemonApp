
import { createSlice } from '@reduxjs/toolkit';

export const typesSlice = createSlice({
    name: 'types',
    initialState: {
        isLoading: true,
        types: []
    },
    reducers: {
        startLoadingTypes: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setTypes: (state, action ) => {
            state.types = action.payload
            state.isLoading = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingTypes, setTypes } = typesSlice.actions;