import { createSlice } from "@reduxjs/toolkit";

const filter = createSlice({
    name: "@@filter",
    initialState: {
        search: "",
        price: "",
        category: ""
    },
    reducers: {
        addSearch : (state, action) => {
            state.search = action.payload;
        },
        addCategory: (state, action) => {
            state.category = action.payload;
        },
        addPrice: (state, action) => {
            state.price = action.payload;
        }
    }
})

export const selectFilter = (state) => state.filter

export const {addSearch, addCategory, addPrice} = filter.actions;
export default filter.reducer;