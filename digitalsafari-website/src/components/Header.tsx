import React from 'react';
import Button from './ui/Button';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-b">
      <div className="font-bold text-lg">DigitalSafari</div>
      <nav className="flex gap-6">
        <a href="#" className="text-slate-700 hover:text-slate-900">Home</a>
        <a href="#" className="text-slate-700 hover:text-slate-900">Services</a>
        <a href="#" className="text-slate-700 hover:text-slate-900">Contact</a>
      </nav>
      <div className="flex gap-2">
        <Button>Sign in</Button>
      </div>
    </header>
  );
}
