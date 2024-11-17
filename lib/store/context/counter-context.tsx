'use client';

import React, { createContext, useContext, useState } from 'react';

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset :()=>void;
}

const CounterContext = createContext<CounterContextType>({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset:()=>{}
});

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = ()=>setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement,reset }}>
      {children}
    </CounterContext.Provider>
  );
}

export const useCounter = () => useContext(CounterContext); 