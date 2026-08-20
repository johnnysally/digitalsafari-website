import React from 'react';
import { ThemeProvider } from './ThemeProvider';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
