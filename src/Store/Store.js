import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const Store = configureStore({
  reducer: {
    // cart: CartSlice
    cart:cartReducer
  },
});

export default Store;