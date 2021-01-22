import React from 'react';
import {Offer} from './Offer/';
import {Qoute} from './Quote/';
import {firstQuoteData} from './Quote/firstQouteData/';
import {secondQuoteData} from './Quote/secondQouteData/';
import {thirdQuoteData} from './Quote/thirdQouteData/';
import {Collection} from './Collection/';
import {Welcome} from './Welcome/';
import {Kitchen} from './Kitchen';
import {StylesAbout} from './StylesAbout/';
import {AccessoriesActions} from './AccessoriesActions/'




function Main() {
    return (
        <>
        <Offer/>
        <Qoute
            textForH2 = {firstQuoteData.textForH2}
            textForH1 = {firstQuoteData.textForH1}
            textForDiv = {firstQuoteData.textForDiv}
        />  
        <Collection/>
        <Welcome/>
        <Kitchen/>
        <Qoute
            textForH2 = {secondQuoteData.textForH2}
            textForH1 = {secondQuoteData.textForH1}
            textForDiv = {secondQuoteData.textForDiv}
        />  
        <StylesAbout/>
        <Qoute
            textForH2 = {thirdQuoteData.textForH2}
            textForDiv = {thirdQuoteData.textForDiv}
        />  
        <AccessoriesActions/>
        </>
    )
}

export {Main};