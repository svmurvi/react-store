import React from 'react';
import styles from './TitleList.module.css'

function TitleList(props) {
    if (props.title !== 'Корзина') {
        return (
            <li className={styles.title_li}>
                <a className={styles.underline} href="0">
                    {props.title}
                </a>
            </li>
        );
    } else {
        return (
        <li id="shopping-cart" className={styles.title_li}>
            <a id="shopping-cart-text" className={styles.underline} href="0">
                {props.title}
            </a>
            <div className={styles.shopping_cart_dropdown}></div>
        </li>
        );
    }
};

export {TitleList};


