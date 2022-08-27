import React from 'react';
import TestItem from '../TestItem';

import style from './TestBlock.module.scss'

const TestBlock = () => {
    return (
        <div className={style.testBlock}>
            <h2 className={style.testBlock__name}>Ingiliz tili</h2>
            <form className={style.testBlock__form}>
                <TestItem />
                <button type="submit" className={style.testBlock__submit}>Yakunlash</button>
            </form>
        </div>
    );
}

export default TestBlock;
