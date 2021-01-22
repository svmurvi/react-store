import React from 'react';
import styles from './stylesAboutItem.module.css';

function StylesAboutItem(props) {
    return (
        <div className={`${styles.styles_section} ${styles[props.styles]}`}>
            <div className={styles.styles_section_blackout}>
                <div className={styles.styles_section_text}>{props.title}</div>
            </div>
        </div>
    );
}

export {StylesAboutItem};