import { createSlice } from "@reduxjs/toolkit";

export const sliceCounter = createSlice({
  name: "counter",
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, actions) => {
      state.value += actions.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = sliceCounter.actions;
export default sliceCounter.reducer;
