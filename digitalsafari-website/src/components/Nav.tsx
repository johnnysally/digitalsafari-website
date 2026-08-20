import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
    </nav>
  );
}
