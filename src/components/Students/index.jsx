import React from 'react';
import StudentItem from './StudentItem';

import style from './Students.module.scss'

const Students = () => {
    return (
        <div className='container'>
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
                    <StudentItem />
                    <StudentItem />
                    <StudentItem />
                    <StudentItem />
                </tbody>
            </table>
        </div>
    );
}

export default Students;
