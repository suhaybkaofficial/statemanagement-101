"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "@/lib/store/redux/counter-slice";
import { Button } from "@/components/ui/button";
import { Card3D } from "@/components/ui/card-3d";
import {
  IconBrandRedux,
  IconBrandZoom,
  IconBraces,
  IconPlus,
  IconMinus,
  IconRefresh,
} from "@tabler/icons-react";
import { useCounter } from "@/lib/store/context/counter-context";
import { useCounterStore } from "@/lib/store/zustand/counter-store";
import type { RootState } from "@/lib/store/redux/store";

export default function CounterManagementDemo() {
  // Redux Counter - properly typed state
  const dispatch = useDispatch();
  const reduxCount = useSelector((state: RootState) => state.counter.count);

  // Context Counter
  const {
    count: contextCount,
    increment: contextIncrement,
    decrement: contextDecrement,
    reset: contextReset,
  } = useCounter();

  // Zustand Counter
  const {
    count: zustandCount,
    increment: zustandIncrement,
    decrement: zustandDecrement,
    reset: zustandReset,
  } = useCounterStore();

  return (
    <div className="space-y-16">
      {/* Context API Section */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Counter Card */}
          <Card3D className="h-full" glowColor="#61dafb">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <IconBraces className="w-8 h-8 text-[#61dafb]" />
                <h2 className="text-xl font-bold text-white">Context Counter</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5">
                  <div className="text-4xl font-bold text-center mb-6 text-white">
                    {contextCount}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      onClick={contextDecrement}
                      className="bg-[#61dafb] hover:bg-[#61dafb]/80 text-black"
                    >
                      <IconMinus className="w-4 h-4" />
                    </Button>
                    <Button onClick={contextReset} variant="outline" className="">
                      <IconRefresh className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={contextIncrement}
                      className="bg-[#61dafb] hover:bg-[#61dafb]/80 text-black"
                    >
                      <IconPlus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  React Context API for component-level state sharing.
                </p>
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
{`// counter-context.tsx
const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {}
});

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{
      count, increment, decrement, reset
    }}>
      {children}
    </CounterContext.Provider>
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
          {/* Counter Card */}
          <Card3D className="h-full" glowColor="#764abc">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <IconBrandRedux className="w-8 h-8 text-[#764abc]" />
                <h2 className="text-xl font-bold text-white">Redux Counter</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5">
                  <div className="text-4xl font-bold text-center mb-6 text-white">
                    {reduxCount}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      onClick={() => dispatch(decrement())}
                      className="bg-[#764abc] hover:bg-[#764abc]/80"
                    >
                      <IconMinus className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => dispatch(reset())}
                      variant="outline"
                      className=""
                    >
                      <IconRefresh className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => dispatch(increment())}
                      className="bg-[#764abc] hover:bg-[#764abc]/80"
                    >
                      <IconPlus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Redux with Redux Toolkit for predictable state updates.
                </p>
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
{`// counter-slice.ts
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;`}
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
          {/* Counter Card */}
          <Card3D className="h-full" glowColor="#50C878">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <IconBrandZoom className="w-8 h-8 text-[#50C878]" />
                <h2 className="text-xl font-bold text-white">Zustand Counter</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5">
                  <div className="text-4xl font-bold text-center mb-6 text-white">
                    {zustandCount}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      onClick={zustandDecrement}
                      className="bg-[#50C878] hover:bg-[#50C878]/80 text-black"
                    >
                      <IconMinus className="w-4 h-4" />
                    </Button>
                    <Button onClick={zustandReset} variant="outline" className="">
                      <IconRefresh className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={zustandIncrement}
                      className="bg-[#50C878] hover:bg-[#50C878]/80 text-black"
                    >
                      <IconPlus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Zustand for simple yet powerful state management.
                </p>
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
{`// counter-store.ts
export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => 
    set((state) => ({ count: state.count + 1 })),
  decrement: () => 
    set((state) => ({ count: state.count - 1 })),
  reset: () => 
    set({ count: 0 })
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

