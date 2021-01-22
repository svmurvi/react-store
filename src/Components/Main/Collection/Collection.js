import React from 'react';
import {CollectionItem} from './CollectionItem';
import styles from './collection.module.css';

function Collection() {
    const collectionElementsCount = [1, 2, 3, 4]
    const collectionItems = collectionElementsCount.map( item => {
        return (
            <CollectionItem
                key = {item}
                Img = {item}
            />
        );
    })
    return (
        <div className={styles.cart}>
            {collectionItems}
        </div>
    );
}

export {Collection};