import { createSlice } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        contactAdded(state, action) {
            return [...state, action.payload]
        },
        contactDeleted(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
    }
})

export const { contactAdded, contactDeleted } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;