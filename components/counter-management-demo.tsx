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

export default function CounterManagementDemo() {
  // Redux Counter
  const dispatch = useDispatch();
  const reduxCount = useSelector((state: any) => state.counter.count);

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Context API Counter */}
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

      {/* Redux Counter */}
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

      {/* Zustand Counter */}
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
    </div>
  );
}
