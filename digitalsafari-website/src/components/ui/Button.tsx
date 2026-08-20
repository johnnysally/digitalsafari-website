"use client";

import React from 'react';

export default function Button({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button className={`bg-blue-600 text-white py-2 px-4 rounded-md hover:opacity-95 ${className ?? ''}`} onClick={onClick}>
      {children}
    </button>
  );
}
