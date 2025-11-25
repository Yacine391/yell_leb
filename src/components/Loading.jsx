import React from 'react';

export default function Loading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-neutral-950 text-white z-50">
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span className="font-mono text-xs tracking-widest animate-pulse">LOADING YELL LAB</span>
      </div>
    </div>
  );
}

