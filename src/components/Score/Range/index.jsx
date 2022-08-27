import React from 'react';

import style from './Range.module.scss'

const Range = ({color}) => {
    const icon_pos = {
        left: '70%',
        background: color,
    }

    const progres_pos = { 
        width: '70%',
        background: color,
        boxShadow: '0px 0px 6px ' + color,
    }
    return (
        <label className={style.range}>
            <span className={style.range__name}>Ingiliz tili</span>
            <div className={style.box_line}>
                <div className={style.box_line_icon} style={icon_pos}>70%</div>
                <div className={style.box_line__progress} style={progres_pos}></div>
            </div>
            <span className={style.range__procent}>100%</span>
            <span>24/30</span>
        </label>
    );
}

export default Range;
