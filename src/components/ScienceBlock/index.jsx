import React from 'react';

import Select from '../Select'

import style from './ScienceBlock.module.scss'

const ScienceBlock = () => {
    const firstScience = [
        'Matematika',
        'fizika'
    ]
    return (
        <div className={style.scienceBlock}>
            <h1 className={style.scienceBlock__title}>Assosiy Imtihonga hush kelibsiz</h1>
            <div className={style.scienceBlock__timeline}>
                <div className={style.active}>1</div>
                <span></span>
                <div className={style.active}>2</div>
                <span></span>
                <div>3</div>
            </div>
            <label className={style.scienceBlock__select}>
                Birinchi fan
                <Select arr={firstScience} className={style.select}/>
            </label>
            <label className={style.scienceBlock__select}>
                Ikkinchi fan
                <Select arr={firstScience} className={style.select}/>
            </label>
        </div>
    );
}

export default ScienceBlock;
