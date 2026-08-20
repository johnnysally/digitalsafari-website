import React from 'react';

export default function Nav() {
  return (
    <nav className="flex gap-6 items-center">
      <a href="#" className="text-slate-700 hover:text-slate-900">Home</a>
      <a href="#" className="text-slate-700 hover:text-slate-900">About</a>
      <a href="#" className="text-slate-700 hover:text-slate-900">Blog</a>
    </nav>
  );
}
