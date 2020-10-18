import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './NavButton.module.scss';

export default function NavButton({ text, href }) {
  const router = useRouter();

  const selectedClass = router.pathname === href ? styles.selected : '';

  return (
    <div className={styles.link}>
      <Link href={href}>
        <div className={`${styles.selected_box} ${selectedClass}`}>
          <p>
            <span className={styles.arrow}>&gt; </span>
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
}
