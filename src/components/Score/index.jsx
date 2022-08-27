import React from 'react';
import Range from './Range';

import style from './Score.module.scss'

const Score = () => {
    return (
        <div className='container'>
            <h1 className={style.results__title}>Assosiy</h1>
            <div className={style.results__ranges}>
                <Range color={'#3919FB'}/>
            </div>
            <h2 className={style.results__subtitle}>Natija (tavsiya etildi yoki etilmadi)</h2>
            <p className={style.results__desc}>Ta’lim muassasi:   Toshkent Axborot</p>
            <p className={style.results__desc}>Texnologiyali Universiteti</p>
            <p className={style.results__desc}>Yo’nalish: Dasturiy ta’minot</p>
            <p className={style.results__desc}>Ta’lim turi: Davlat granti</p>
        </div>
    );
}

export default Score;
