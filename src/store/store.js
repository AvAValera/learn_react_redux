import { configureStore } from "@reduxjs/toolkit";
import todo from "./todo";
import theme from "./theme";
import filter from "./filter";



const store = configureStore({
    reducer: {
        todo,
        theme,
        filter
    },
    devTools: true
});




export default store;