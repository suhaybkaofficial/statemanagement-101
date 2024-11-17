import { Suspense } from 'react';
import { PostsServer } from '@/components/posts-server';
import { PostsErrorBoundary, PostsLoading } from '@/components/posts-client';
import { ErrorBoundary } from 'react-error-boundary';
import { SiteHeader } from '@/components/layout/site-header';

// Add metadata for better SEO
export const metadata = {
  title: 'Posts | Server-Side Rendered',
  description: 'View our posts using server-side rendering in Next.js',
};

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950">
      {/* Site Header */}
      <SiteHeader />
      
      <main className="container mx-auto py-8 px-4">
        {/* Page Header with CSS Animation */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Server-Side Posts
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Experience the power of server-side rendering with Next.js App Router.
            Posts are fetched and rendered on the server for optimal performance.
          </p>
        </div>
        
        {/* Posts Content */}
        <ErrorBoundary FallbackComponent={PostsErrorBoundary}>
          <Suspense fallback={<PostsLoading />}>
            <PostsServer />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
} 