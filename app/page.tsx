'use client';

import { Provider } from 'react-redux';
import { store } from '@/lib/store/redux/store';
import { SiteHeader } from '@/components/layout/site-header';
import PostsManagementDemo from '@/components/posts-management-demo';
import { CounterProvider } from '@/lib/store/context/counter-context';
import { PostsProvider } from '@/lib/store/context/posts-context';
import CounterManagementDemo from '@/components/counter-management-demo';

export default function Home() {
  return (
    <Provider store={store}>
      <CounterProvider>
        <PostsProvider>
          <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950">
            {/* Site Header */}
            <SiteHeader />
            
            <div className="p-8">
              {/* Page Content */}
              <div className="animate-fade-in">
                <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  State Management Evolution
                </h1>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                  Compare different approaches to state management using counters and API data fetching.
                  See how Redux, Context API, and Zustand handle various use cases.
                </p>
              </div>
              
              {/* Counter Components */}
              <CounterManagementDemo />
              <PostsManagementDemo />
            </div>
          </div>
        </PostsProvider>
      </CounterProvider>
    </Provider>
  );
}
