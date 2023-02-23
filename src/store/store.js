import {configureStore} from "@reduxjs/toolkit";
import shop from "./data-slice";
import filter from "./filter-slice";


const store = configureStore({
  reducer: {
    shop,
    filter
  },
  devTools: true,
});

export default store;