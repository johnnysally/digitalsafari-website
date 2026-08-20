import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()} DigitalSafari</div>
      <div className={styles.right}>Built with care.</div>
    </footer>
  );
}
