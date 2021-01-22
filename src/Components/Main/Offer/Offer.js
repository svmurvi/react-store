import React from 'react';
import styles from './offer.module.css';
import HeaderPng from '../../../assets/img/Header.png';

function Offer() {
  return (
    <div className={styles.offer}>
      <img className={styles.bckgrnd} src={HeaderPng}/>
    </div>
)
}

export {Offer};