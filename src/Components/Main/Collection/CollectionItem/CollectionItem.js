import React from 'react';
import styles from './collectionItem.module.css';

function CollectionItem(props) { 
    return (
        <div className={`${styles.cart_item} ${styles[`cart_item${props.Img}`]}`}>
            <div className={styles.cart_blackout}>
                <div className={styles.cart_text}>
                   Данный кухонный гарнитур является отличным...
                <br/>
                <br/>
                    <a href="0">подробнее...</a>
                </div>
            </div>
        </div>
    )
}

export {CollectionItem};