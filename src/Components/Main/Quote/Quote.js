import React from 'react';
import styles from './quote.module.css';

function Qoute(props) {
    return (
        <div className={styles.quotes}> 
          <h2>{props.textForH2}</h2>
          <h1>{props.textForH1}</h1> 
          <div className={styles.text}>
              <h4>{props.textForDiv}</h4>  
          </div>
        </div>
    );
}

export {Qoute};