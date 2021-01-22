import React from 'react';
import styles from './welcome.module.css';

function Welcome() {
    return (
        <div className={styles.welcome}>
          Добро пожаловать в клуб Введите код продукта, 
          который вы найдете в папке в cнаборе “кухни”,
          удобной коробке чистящих средств, которую вв вы получили 
          с вашей кухней, и присоединяйтесь к нам в центре нашего проекта
          удоволетворенности клиентов!
        </div>
    );
}

export {Welcome};