// Zustand implementation for posts
import { create } from 'zustand';
import { Post } from '@/lib/types/post';

interface PostsStore {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
}

export const usePostsStore = create<PostsStore>((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    try {
      set({ loading: true, error: null });
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      set({ posts: data, loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch posts', loading: false });
    }
  },
})); 