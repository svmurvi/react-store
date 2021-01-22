import React from 'react';
import {StylesAboutItem} from './StylesAboutItem/';
import styles from './stylesAbout.module.css'

function StylesAbout() {
    return (
        <div className={styles.styles}>
            <StylesAboutItem
                title={'Современный'}
                styles={'modern'}
            />
            <StylesAboutItem
                title={'Традиционный'}
                styles={'traditional'}
            />
        </div>
    );
}

export {StylesAbout};