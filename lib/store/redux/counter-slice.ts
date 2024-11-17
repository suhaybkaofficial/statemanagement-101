'use client';

import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  } as CounterState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset:(state)=>{
      state.value=0
    }
  },
});

export const { increment, decrement ,reset} = counterSlice.actions;
export default counterSlice.reducer; 