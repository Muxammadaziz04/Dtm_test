import React, { useState } from 'react';

import openIcon from '../../../assets/openIcon.svg'

import style from './Item.module.scss'

const Item = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={style.item} onClick={() => setIsOpen(state => !state)}>
            <span>
                <span>Test #1</span>
                <span>23/04/2022</span>
                <span>166.9/189.0</span>  
                <img src={openIcon} alt="open icon" className={`${isOpen ? style.open : ''}`}/>  
            </span>
            <div className={style.item__accordion + ` ${isOpen ? style.open_item : ''}`}>
                <span>
                    <span>Dasturiy ta’minot(TATU)</span>
                    <span>Blok #1</span>
                    <span>Blok #2</span>
                </span>
                <span>
                    <span>Davlat granti</span>
                    <span>21 / 30</span>
                    <span>24 / 30</span>
                </span>
            </div>
        </div>
    );
}

export default Item;
