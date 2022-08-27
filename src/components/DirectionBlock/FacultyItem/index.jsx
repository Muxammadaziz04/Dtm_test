import React from 'react';

import closeIcon from '../../../assets/close.svg'

import style from './FacultyItem.module.scss'

const FacultyItem = ({ name }) => {

    if(!name) return <></>

    return (
        <div className={style.item}>
            {name}
            <img src={closeIcon} alt="close icon" />
        </div>
    );
}

export default FacultyItem;
