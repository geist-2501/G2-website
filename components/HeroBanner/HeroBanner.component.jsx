import React from 'react';
import styles from './HeroBanner.module.scss';

export default function HeroBanner() {
  return (
    <div className={styles.hero_banner}>
      <div className={styles.hero_text}>
        <div>
          <h1>Technical</h1>
        </div>
        <div>
          <h1>Artist</h1>
        </div>
        <div>
          <h1>Creative</h1>
        </div>
        <div>
          <h1>Engineer</h1>
        </div>
      </div>
    </div>
  );
}
