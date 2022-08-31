import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'

import bookIcon from '../../assets/book.png'
import cubokIcon from '../../assets/cubok.svg'
import Item from './Item';

import Logout from '../../assets/logout.svg'

import style from './Results.module.scss'
import { HOST } from '../../constants';

const Results = () => {
    const [results, setResults] = useState([])
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        fetch(`${HOST}/results`, { headers: { token } })
            .then(res => res.json())
            .then(res => {
                if (res.status === 200) {
                    setResults(res.data)
                } else {
                    alert(res.error || res.message)
                }
            })
    }, [token])

    if (!token) return <Navigate to='/login' />

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
                <Link to="/login" className={style.results__nav__item} onClick={() => localStorage.removeItem('token')}>
                    <img src={Logout} alt="logout icon" />
                    Chiqish
                </Link>
            </div>
            <div className={style.results__block}>
                <h3 className={style.results__block__title}>Testlar</h3>
                {
                    results.length > 0 && results.map((result, index) => (
                        <Item key={result.result_id} result={result} count={index + 1} />
                    ))
                }
            </div>
        </div>
    );
}

export default Results;
