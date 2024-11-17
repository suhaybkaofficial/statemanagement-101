'use client';

import { create } from 'zustand';
import { Post } from '@/lib/types/post';

// Define the store's state and actions interface
interface PostsStore {
  // State
  posts: Post[];
  loading: boolean;
  error: string | null;
  // Actions
  fetchPosts: () => Promise<void>;
}

// Create Zustand store
// Zustand uses a simple create function that returns a hook
export const usePostsStore = create<PostsStore>((set) => ({
  // Initial state
  posts: [],
  loading: false,
  error: null,

  // Actions
  fetchPosts: async () => {
    try {
      // Update loading state
      set({ loading: true, error: null });
      
      // Fetch data
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      
      // Update state with fetched data
      set({ posts: data, loading: false });
    } catch (err) {
      // Handle errors
      set({ error: 'Failed to fetch posts', loading: false });
    }
  },
}));

