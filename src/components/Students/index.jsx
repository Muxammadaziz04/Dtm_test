import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { HOST } from '../../constants';
import Loader from '../Loader';
import StudentItem from './StudentItem';

import style from './Students.module.scss'

const Students = () => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        setLoading(true)
        fetch(`${HOST}/highest/results`, { headers: { token } })
            .then(res => res.json())
            .then(res => {
                setLoading(false)
                if (res.status === 200) {
                    setResults(res.data)
                } else {
                    alert(res.error || res.message)
                }
            })
    }, [token])

    if (!token) return <Navigate to='/login' />

    return (
        <div className='container'>
            { loading ? <Loader /> : <></> }
            <h2 className={style.students__title}>Songi imtihon g’olibi</h2>
            <table className={style.students__table}>
                <thead>
                    <tr className={style.students__table__row}>
                        <th>ID</th>
                        <th>Ismi</th>
                        <th>Yonalish</th>
                        <th>Sana</th>
                        <th>Ball</th>
                        <th>Vaqt</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        results.length > 0 && results.map((result, index) => (
                            <StudentItem key={result.result_id} result={result} count={index + 1} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Students;
