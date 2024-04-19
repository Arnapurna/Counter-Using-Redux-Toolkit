import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./CountSlice";
const store= configureStore({
reducer:{
    counter:CountSlice,
}
})
export default store