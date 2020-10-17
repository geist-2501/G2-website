import React from 'react';
import styles from './section.module.scss';

function SectionLayout(props) {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                {props.children}
            </div>
        </section>
    );
}

export default SectionLayout;