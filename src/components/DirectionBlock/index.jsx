import React from 'react';
import Select from '../Select';

import style from './DirectionBlock.module.scss'
import FacultyItem from './FacultyItem';
import TableItem from './TableItem';

const DirectionBlock = () => {
    const arr = ['tatu']
    return (
        <div className={style.directionBlock}>
            <h1 className={style.directionBlock__title}>Assosiy Imtihonga hush kelibsiz</h1>
            <div className={style.directionBlock__timeline}>
                <div className={style.active}>1</div>
                <span></span>
                <div className={style.active}>2</div>
                <span></span>
                <div className={style.active}>3</div>
            </div>
            <div className={style.directionBlock__container}>
                <label className={style.directionBlock__select}>
                    Birinchi fan
                    <Select arr={arr} className={style.select} />
                </label>
                <span>
                    <div className={style.directionBlock__facultyBlokc}>
                        <FacultyItem name={'kiberwefweferferg'} />
                        <FacultyItem name={'kiber'} />
                        <FacultyItem name={'kiber'} />
                        <FacultyItem name={'kiber45t45t'} />
                        <FacultyItem name={'kiber'} />
                    </div>
                    <div className={style.directionBlock__facultyInfo}>
                        <h2 className={style.directionBlock__facultyInfo__title}>Namangan davlat tibbot instuti</h2>
                        <p  className={style.directionBlock__facultyInfo__desc}>Namangan viloyti</p>
                        <TableItem />
                        <TableItem />
                    </div>
                </span>
            </div>
        </div>
    );
}

export default DirectionBlock;
