'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '@/lib/store/redux/posts-slice';
import { usePosts } from '@/lib/store/context/posts-context';
import { usePostsStore } from '@/lib/store/zustand/posts-store';
import { Button } from '@/components/ui/button';
import { Card3D } from '@/components/ui/card-3d';
import {
  IconBrandRedux,
  IconBrandZoom,
  IconBraces,
  IconRefresh,
} from '@tabler/icons-react';
import type { RootState, AppDispatch } from '@/lib/store/redux/store';
import type { Post } from '@/lib/types/post';

export default function PostsManagementDemo() {
  // Redux Posts
  const dispatch = useDispatch<AppDispatch>();
  const { posts: reduxPosts, loading: reduxLoading, error: reduxError } = 
    useSelector((state: RootState) => state.posts);

  // Context Posts
  const { posts: contextPosts, loading: contextLoading, error: contextError, fetchPosts: fetchContextPosts } = usePosts();

  // Zustand Posts
  const { 
    posts: zustandPosts, 
    loading: zustandLoading, 
    error: zustandError,
    fetchPosts: fetchZustandPosts 
  } = usePostsStore();

  const PostsList = ({ posts, loading, error }: { posts: Post[], loading: boolean, error: string | null }) => (
    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-400 text-center">{error}</p>
      ) : (
        posts.slice(0, 3).map((post) => (
          <div key={post.id} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <h3 className="font-medium text-white mb-1 line-clamp-1">{post.title}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">{post.body}</p>
            <div className="text-xs text-gray-500 mt-2">Post ID: {post.id}</div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {/* Context API Posts */}
      <Card3D className="h-full" glowColor="#61dafb">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <IconBraces className="w-8 h-8 text-[#61dafb]" />
            <h2 className="text-xl font-bold text-white">Context Posts</h2>
          </div>
          <div className="space-y-4">
            <Button 
              onClick={() => fetchContextPosts()}
              className="w-full bg-[#61dafb] hover:bg-[#61dafb]/80 text-black"
              disabled={contextLoading}
            >
              <IconRefresh className={`w-4 h-4 mr-2 ${contextLoading ? 'animate-spin' : ''}`} />
              {contextLoading ? 'Loading...' : 'Fetch Posts'}
            </Button>
            <PostsList posts={contextPosts} loading={contextLoading} error={contextError} />
          </div>
        </div>
      </Card3D>

      {/* Redux Posts */}
      <Card3D className="h-full" glowColor="#764abc">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <IconBrandRedux className="w-8 h-8 text-[#764abc]" />
            <h2 className="text-xl font-bold text-white">Redux Posts</h2>
          </div>
          <div className="space-y-4">
            <Button 
              onClick={() => dispatch(fetchPosts())}
              className="w-full bg-[#764abc] hover:bg-[#764abc]/80"
              disabled={reduxLoading}
            >
              <IconRefresh className={`w-4 h-4 mr-2 ${reduxLoading ? 'animate-spin' : ''}`} />
              {reduxLoading ? 'Loading...' : 'Fetch Posts'}
            </Button>
            <PostsList posts={reduxPosts} loading={reduxLoading} error={reduxError} />
          </div>
        </div>
      </Card3D>

      {/* Zustand Posts */}
      <Card3D className="h-full" glowColor="#50C878">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <IconBrandZoom className="w-8 h-8 text-[#50C878]" />
            <h2 className="text-xl font-bold text-white">Zustand Posts</h2>
          </div>
          <div className="space-y-4">
            <Button 
              onClick={() => fetchZustandPosts()}
              className="w-full bg-[#50C878] hover:bg-[#50C878]/80 text-black"
              disabled={zustandLoading}
            >
              <IconRefresh className={`w-4 h-4 mr-2 ${zustandLoading ? 'animate-spin' : ''}`} />
              {zustandLoading ? 'Loading...' : 'Fetch Posts'}
            </Button>
            <PostsList posts={zustandPosts} loading={zustandLoading} error={zustandError} />
          </div>
        </div>
      </Card3D>
    </div>
  );
} 