'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Counter</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-xl h-12 w-12"
        >
          -
        </button>
        <span className="text-2xl font-mono w-16 text-center">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-xl h-12 w-12"
        >
          +
        </button>
      </div>
      <button
        onClick={() => setCount(0)}
        className="mt-2 px-4 py-2 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium"
      >
        Reset
      </button>
    </div>
  );
}