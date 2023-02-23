import {configureStore} from "@reduxjs/toolkit";
import shop from "./data-slice";


const store = configureStore({
  reducer: {
    shop
  },
  devTools: true,
});

export default store;