import { createSlice } from "@reduxjs/toolkit";
import { clearAll } from "./clear";

const filter = createSlice({
    name: "@@filter",
    initialState: 'all',
    reducers: {
        setFilter: (_, action) => {
            return action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(clearAll, (state, action) => {
            return 'all';
        });
    }
});

export const { setFilter } = filter.actions;
export const selectFilter = (state) => state.filter;


export default filter.reducer;