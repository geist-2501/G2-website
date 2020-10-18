import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <section className={styles.footer_section}>
      <div className={styles.footer}>
        <div className={styles.footer_container}>
          <p className={styles.f_header}>Site made in React & Next with love.</p>
          <p className={`${styles.f_contact_title} ${styles.sub_text}`}>Contact.</p>
          <p className={`${styles.f_contact_content} ${styles.f_content}`}>
            g2.geist.2501@gmail.com
            +44 (0) 7548 956655
          </p>
          <p className={`${styles.f_links_title} ${styles.sub_text}`}>Links.</p>
          <p className={`${styles.f_links_content} ${styles.f_content}`}>Links content.</p>
        </div>
      </div>
    </section>
  );
}
