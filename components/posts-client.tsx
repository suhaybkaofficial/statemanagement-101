'use client';

import { Card } from '@/components/ui/card';

// Client component for error handling
export function PostsErrorBoundary() {
  return (
    <div className="p-4 bg-red-50 text-red-500 rounded-md">
      <h3 className="font-bold mb-2">Error loading posts</h3>
      <p className="text-sm">Failed to load posts. Please try again later.</p>
    </div>
  );
}

// Client component for loading state
export function PostsLoading() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="p-4 animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-100 rounded w-full"></div>
            <div className="h-4 bg-gray-100 rounded w-5/6"></div>
            <div className="h-4 bg-gray-100 rounded w-4/6"></div>
          </div>
        </Card>
      ))}
    </div>
  );
} 