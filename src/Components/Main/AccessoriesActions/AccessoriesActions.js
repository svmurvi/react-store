import React from 'react';
import styles from './accessories.module.css';

function AccessoriesActions() {
    return (
        <>
        <div className={styles.accesories_actions}>
            <div className={styles.accesories_buttons}>
                <div>Сортировать по:</div>
                <button data-action="price">Цене</button>
                <button data-action="rating">Рейтингу</button>
                <button data-action="name">Названию товара</button>
            </div>
            <div id="search_block" className={styles.search_block}>
                <p>Поиск товара:</p>
                <input type="text" className={styles.input_search} placeholder="Введите название товара"></input>
            </div>
        </div>
        <div className={styles.accessories}></div>
        </>
    );
}

export {AccessoriesActions};