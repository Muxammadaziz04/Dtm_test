import React from 'react';
import { Link } from 'react-router-dom'

import bookIcon from '../../assets/book.png'
import cubokIcon from '../../assets/cubok.svg'
import Item from './Item';

import Logout from '../../assets/logout.svg'

import style from './Results.module.scss'

const Results = () => {
    return (
        <div className={style.results + " container"}>
            <div className={style.results__nav}>
                <Link to='/science' className={style.results__nav__item}>
                    <img src={bookIcon} alt="book icon" />
                    Testlar
                </Link>
                <div className={style.results__nav__item + ' ' + style.active}>
                    <img src={cubokIcon} alt="book icon" />
                    Yutuqlarim
                </div>
                <Link to="/login" className={style.results__nav__item}>
                    <img src={Logout} alt="logout icon" />
                    Chiqish
                </Link>
            </div>
            <div className={style.results__block}>
                <h3 className={style.results__block__title}>Testlar</h3>
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
}

export default Results;
