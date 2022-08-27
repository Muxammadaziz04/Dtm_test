import React from 'react';
import Radio from './Radio';

import style from './TestItem.module.scss'

const TestItem = () => {
    return (
        <div className={style.testItem}>
            <h3 className={style.testItem__question}>#3 Choose the answer which correctly completes the sentence.</h3>
            <p className={style.testItem__desc}>When I got home I found an envelope on the table. In it was a … card from Aunt Alice for passing my French exam.</p>
            <div className={style.testItem__variants}>
                <Radio name={1} variant="congratulation’s" />
                <Radio name={1} variant="congratulation’s" />
                <Radio name={1} variant="congratulation’s" />
                <Radio name={1} variant="congratulation’s" />
            </div>
        </div>
    );
}

export default TestItem;
