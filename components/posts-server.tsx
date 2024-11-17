import { Card3D } from '@/components/ui/card-3d';
import { Post } from '@/lib/types/post';
import { IconServer } from '@tabler/icons-react';
import { Card } from './ui/card';

// Server Component for fetching and displaying posts
export async function PostsServer() {
  try {
    // Fetch posts from the API with caching
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts: Post[] = await response.json();

    if (!posts || posts.length === 0) {
      return (
        <div className="p-4 bg-yellow-50 text-yellow-600 rounded-md">
          No posts available at the moment.
        </div>
      );
    }

    // Return the styled posts grid
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post: Post) => (
          <Card3D key={post.id} className="h-full" glowColor="#4f46e5">
            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <IconServer className="w-8 h-8 text-indigo-500" />
                <h2 className="text-xl font-bold text-white">Post {post.id}</h2>
              </div>
              
              {/* Card Content */}
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h3 className="font-medium text-white mb-1 line-clamp-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {post.body}
                  </p>
                  <div className="text-xs text-gray-500 mt-2">
                    User ID: {post.userId}
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        ))}
      </div>
    );
  } catch (error) {
    throw error; // This will be caught by the error boundary
  }
}

// Enhanced loading component with better visual feedback
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