import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    firstValue: 0 
  },
  reducers: {
    // First action
    increment(state, action) {
      state.firstValue += 1;
    },
    // Second action
    decrement(state, action) {
      state.firstValue -= 1; 
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
