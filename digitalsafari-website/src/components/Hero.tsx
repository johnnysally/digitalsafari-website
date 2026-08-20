import React from 'react';
import styles from './Hero.module.css';
import Container from './Container';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.title}>We build delightful digital products</h1>
        <p className={styles.subtitle}>Design, engineering, and growth for ambitious teams.</p>
      </Container>
    </section>
  );
}
