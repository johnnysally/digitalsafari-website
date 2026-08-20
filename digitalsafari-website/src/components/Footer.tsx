import React from 'react';

export default function Footer() {
  return (
    <footer className="flex justify-between px-6 py-4 text-sm text-slate-500 dark:text-slate-400 border-t">
      <div>© {new Date().getFullYear()} DigitalSafari</div>
      <div className="text-right">Built with care.</div>
    </footer>
  );
}
