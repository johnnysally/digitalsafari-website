import React from 'react';
import Container from './Container';

export default function Hero() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-transparent dark:from-slate-800">
      <Container>
        <h1 className="text-4xl font-bold mb-2">We build delightful digital products</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Design, engineering, and growth for ambitious teams.</p>
      </Container>
    </section>
  );
}
