

import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        category: 'all',
        typeVisible: 'all',
        order: 'asc',
        strongerVisible: false,
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        toggleTypeVisible: (state, action) => {
            state.typeVisible = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        toggleStrongerVisible: (state) => {
            state.strongerVisible = !state.strongerVisible;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setCategory, toggleTypeVisible, setOrder, toggleStrongerVisible } = filtersSlice.actions;