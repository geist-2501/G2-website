import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './NavButton.module.scss';

export default function NavButton({ children, href }) {
  const router = useRouter();

  const selectedClass = router.pathname === href ? styles.selected : '';

  return (
    <div className={styles.link}>
      <div className={`${styles.selected_box} ${selectedClass}`}>
        <Link href={href}>
          <span>
            <span className={styles.arrow}>&gt; </span>
            {children}
          </span>
        </Link>
      </div>
    </div>
  );
}
