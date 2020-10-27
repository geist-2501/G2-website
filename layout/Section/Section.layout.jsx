import React from 'react';
import styles from './Section.module.scss';

function SectionLayout(props) {
  const { children } = props;
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}

export default SectionLayout;
