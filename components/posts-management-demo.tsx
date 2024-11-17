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
    <div className="space-y-16">
      {/* Context API Section */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Posts Card */}
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

          {/* Code Example Card */}
          <Card3D className="h-full" glowColor="#61dafb">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconBraces className="w-6 h-6 text-[#61dafb]" />
                <h3 className="text-lg font-semibold text-white">Context Implementation</h3>
              </div>
              <div className="relative">
                <pre className="p-4 rounded-lg bg-black/50 text-xs overflow-x-auto">
                  <code className="text-gray-200">
                  {`
                  const PostsContext = createContext<PostsContextType>({
                    posts: [],
                    loading: false,
                    error: null,
                    fetchPosts: async () => {},
                  });

                  export function PostsProvider({ children }) {
                    const [posts, setPosts] = useState<Post[]>([]);
                    const [loading, setLoading] = useState(false);
                    const [error, setError] = useState<string | null>(null);

                    const fetchPosts = async () => {
                      try {
                        setLoading(true);
                        const response = await fetch('/api/posts');
                        const data = await response.json();
                        setPosts(data);
                      } catch (err) {
                        setError('Failed to fetch posts');
                      } finally {
                        setLoading(false);
                      }
                    };

                    return (
                      <PostsContext.Provider value={{
                        posts, loading, error, fetchPosts
                      }}>
                        {children}
                      </PostsContext.Provider>
                    );
                  }`}
                                    </code>
                </pre>
              </div>
            </div>
          </Card3D>
        </div>
      </div>

      {/* Redux Section */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Posts Card */}
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

          {/* Code Example Card */}
          <Card3D className="h-full" glowColor="#764abc">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconBrandRedux className="w-6 h-6 text-[#764abc]" />
                <h3 className="text-lg font-semibold text-white">Redux Implementation</h3>
              </div>
              <div className="relative">
                <pre className="p-4 rounded-lg bg-black/50 text-xs overflow-x-auto">
                  <code className="text-gray-200">
                  {`
                  export const fetchPosts = createAsyncThunk(
                    'posts/fetchPosts',
                    async () => {
                      const response = await fetch('/api/posts');
                      return response.json();
                    }
                  );

                  const postsSlice = createSlice({
                    name: 'posts',
                    initialState: {
                      posts: [],
                      loading: false,
                      error: null,
                    },
                    reducers: {},
                    extraReducers: (builder) => {
                      builder
                        .addCase(fetchPosts.pending, (state) => {
                          state.loading = true;
                          state.error = null;
                        })
                        .addCase(fetchPosts.fulfilled, (state, action) => {
                          state.posts = action.payload;
                          state.loading = false;
                        })
                        .addCase(fetchPosts.rejected, (state) => {
                          state.loading = false;
                          state.error = 'Failed to fetch posts';
                        });
                    },
                  });`}
                  </code>
                </pre>
              </div>
            </div>
          </Card3D>
        </div>
      </div>

      {/* Zustand Section */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Posts Card */}
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

          {/* Code Example Card */}
          <Card3D className="h-full" glowColor="#50C878">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconBrandZoom className="w-6 h-6 text-[#50C878]" />
                <h3 className="text-lg font-semibold text-white">Zustand Implementation</h3>
              </div>
              <div className="relative">
                <pre className="p-4 rounded-lg bg-black/50 text-xs overflow-x-auto">
                  <code className="text-gray-200">
                  {`
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
                        const response = await fetch('/api/posts');
                        const data = await response.json();
                        set({ posts: data, loading: false });
                      } catch (err) {
                        set({ error: 'Failed to fetch posts', loading: false });
                      }
                    },
                  }));`}
                  </code>
                </pre>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </div>
  );
} 
