import {createSlice } from "@reduxjs/toolkit";

const filter = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filter,
    reducers: {
        filterChange(state, action) {
            return action.payload;
        },
    }
})

export const { filterChange } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;