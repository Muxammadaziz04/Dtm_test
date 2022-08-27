import React from 'react';

import style from './Radio.module.scss'

const Index = ({name, variant}) => {
    return (
        <label className={style.radio}>
            <input type="radio" value={variant} name={name} />
            {variant}
        </label>
    );
}

export default Index;
