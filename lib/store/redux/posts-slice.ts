'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '@/lib/types/post';

// Create an async thunk for fetching posts
// This handles the async operation and automatically dispatches pending/fulfilled/rejected actions
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
});

// Define the state structure for posts
interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

// Create a slice for posts management
// This includes the reducer and actions in one place (Redux Toolkit pattern)
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  } as PostsState,
  reducers: {
    // Regular reducers can be added here for synchronous actions
  },
  // Handle async action states using builder callback
  extraReducers: (builder) => {
    builder
      // When the fetch request starts
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // When the fetch request succeeds
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      // When the fetch request fails
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch posts';
      });
  },
});

export default postsSlice.reducer; 