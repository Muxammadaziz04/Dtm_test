import React from 'react';

import style from './StudentItem.module.scss'

const StudentItem = () => {
    return (
        <tr className={style.row}>
            <td>1</td>
            <td>Navruz</td>
            <td>Moliya</td>
            <td>23.03.2022</td>
            <td>189</td>
            <td>156 min</td>
        </tr>
    );
}

export default StudentItem;
