import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <section className={styles.footer_section}>
      <div className={styles.footer}>
        <div className={styles.footer_container}>
          <p className={styles.f_header}>
            Site made with <i className={`${styles.heart} fas fa-heart`} /> using React & Next .
          </p>
          <p className={styles.f_subheader}>
            It's still being built!
          </p>
          <p className={`${styles.f_contact_title} ${styles.sub_text}`}>
            Contact.
          </p>
          <p className={`${styles.f_contact_content} ${styles.f_content}`}>
            g2.geist.2501@gmail.com <br />
            +44 (0) 7548 956655
          </p>
          <p className={`${styles.f_links_title} ${styles.sub_text}`}>Links.</p>
          <ul className={`${styles.f_links_content} ${styles.f_content}`}>
            <li>
              <a href="https://github.com/geist-2501" target="_blank" rel="noreferrer">
                <i className="fab fa-github" /> Github <i className="fas fa-external-link-alt fa-xs" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/blair-cross/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" /> LinkedIn <i className="fas fa-external-link-alt fa-xs" />
              </a>
            </li>
            <li>
              <a href="https://www.artstation.com/blaircross" target="_blank" rel="noreferrer">
                <i className="fab fa-artstation" /> ArtStation <i className="fas fa-external-link-alt fa-xs" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
