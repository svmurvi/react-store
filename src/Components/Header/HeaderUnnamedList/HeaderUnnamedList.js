import React from 'react';
import {listOfTitles} from '../data/';
import {TitleList} from '../TitleList';
import styles from './headerUL.module.css';


function HeaderUnnamedList(props) {
    const listOfTitleLists = listOfTitles.map( item => {
        return (
            <TitleList key={item.key} title={item.title}/>
        );
    })
    return (
        <ul className={styles.titles}>
            {listOfTitleLists}
        </ul>
    );
}

export {HeaderUnnamedList};

