import React from 'react';

import style from './TableItem.module.scss'

const TableItem = ({info}) => {

    if(!info) return <></>

    return (
        <div className={style.table}>
            <span>{info?.name}</span>
            <span>{info?.min}</span>
            <span>{info?.max}</span>
        </div>
    );
}

export default TableItem;
