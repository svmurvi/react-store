import React from 'react';
import {HeaderUnnamedList} from './HeaderUnnamedList'
import styles from './header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_menu}>
                <HeaderUnnamedList/>
            </div>
        </div>
    );
}

export {Header};