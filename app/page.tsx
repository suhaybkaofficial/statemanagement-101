'use client';

import { Provider } from 'react-redux';
import { store } from '@/lib/store/redux/store';
import { CounterProvider } from '@/lib/store/counter-context';
import { PostsProvider } from '@/lib/store/posts-context';
import StateManagementDemo from '@/components/state-management-demo';
import PostsManagementDemo from '@/components/posts-management-demo';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Provider store={store}>
      <CounterProvider>
        <PostsProvider>
          <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                State Management Evolution
              </h1>
              <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                Compare different approaches to state management using counters and API data fetching.
                See how Redux, Context API, and Zustand handle various use cases.
              </p>
            </motion.div>
            <StateManagementDemo />
            <PostsManagementDemo />
          </div>
        </PostsProvider>
      </CounterProvider>
    </Provider>
  );
}
