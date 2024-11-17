'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import postsReducer from './posts-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 