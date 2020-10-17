import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import NavButton from "../NavButton/NavButton.component";

export default function NavComponent(props) {
    return (
        <div className={styles.nav}>
            <div className={`${styles.nav_left} ${styles.nav_content} element`}>
                <h1 className={styles.logo}>G2</h1>
            </div>
            <nav className={`${styles.nav_right} ${styles.nav_content} element`}>
              <NavButton href={'/'}>Home</NavButton>
              <NavButton href={'/projects'}>Projects</NavButton>
              <NavButton href={'/blog'}>Blog</NavButton>
              <NavButton href={'/about'}>About</NavButton>
            </nav>
        </div>
    );
};