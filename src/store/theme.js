import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
    name: "@@theme",
    initialState: "dark",
    reducers: {
        setTheme: (state, action) => {
            return state === "dark"? "light" : "dark";
        },
    },
});
export const selectTheme = (state) => state.theme;
export const { setTheme } = theme.actions;


export default theme.reducer;

