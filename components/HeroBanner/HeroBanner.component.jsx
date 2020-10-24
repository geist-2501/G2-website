import React from 'react';
import styles from './HeroBanner.module.scss';

export default function HeroBanner(props) {
  const { children } = props;
  return (
    <div className={styles.hero_banner}>
      {children}
    </div>
  );
}
