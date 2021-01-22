import React from 'react';
import styles from './kitchen.module.css';

function Kitchen() {
    return (
        <div className={styles.kitchen}>
            <div className={styles.hidden_desc}>
                <div className={styles.hidden_desc_text}>
                    Кухонные гарнитуры нашего производства прекрасно впишутся в интерьер Вашего дома
                </div>
            </div>
        </div>
    );
}

export {Kitchen};