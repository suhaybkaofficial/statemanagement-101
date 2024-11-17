'use client';

import React, { createContext, useContext, useState } from 'react';
import { Post } from '@/lib/types/post';

// Define the shape of our context
interface PostsContextType {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
}

// Create context with default values
// This provides TypeScript support and fallback values
const PostsContext = createContext<PostsContextType>({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {},
});

// Provider component that wraps parts of our app that need access to the context
export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  // State management using useState hooks
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch posts that will be available through context
  const fetchPosts = async () => {
    try {
      setLoading(true); // Start loading
      setError(null); // Clear any existing errors
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data); // Update posts state
    } catch (err) {
      setError('Failed to fetch posts'); // Set error message
    } finally {
      setLoading(false); // Stop loading regardless of outcome
    }
  };

  // Provide the state and functions to children components
  return (
    <PostsContext.Provider value={{ posts, loading, error, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

// Custom hook for easy context consumption
// This simplifies the usage in components and provides type safety
export const usePosts = () => useContext(PostsContext); 