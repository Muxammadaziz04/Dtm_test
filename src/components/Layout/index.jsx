import React from 'react';

import arrow from '../../assets/arrow.svg'

import style from './Layout.module.scss'

const Layout = () => {
    return (
        <div>
            <div className="container">
                <div className={style.layout__backBtn}>
                    <button>
                        <img src={arrow} alt="go to back" />
                        Orqaga
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Layout;
