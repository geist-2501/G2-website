import React from 'react';
import styles from './InfoSection.module.scss';

export default function InfoSection({ title, highlight, children }) {
  return (
    <div className={styles.info_section}>
      <div className={styles.info_title}>
        <p>
          <span className={styles.dollar}>$</span>
          {title}
          <span className={styles.highlight}>{highlight}</span>
        </p>
        <div className={styles.dash} />
      </div>
      <div className={styles.info_content}>
        {children}
      </div>
    </div>
  );
}
