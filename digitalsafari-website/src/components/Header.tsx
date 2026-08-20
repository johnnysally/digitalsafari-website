import React from 'react';
import styles from './Header.module.css';
import Button from './ui/Button';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>DigitalSafari</div>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
      <div className={styles.actions}>
        <Button>Sign in</Button>
      </div>
    </header>
  );
}
