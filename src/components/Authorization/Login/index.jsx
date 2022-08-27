import React, { useRef } from 'react';
import { Link } from 'react-router-dom'

import Form from '../Form';
import Input from '../Input';

import style from './Login.module.scss'

const Login = () => {
    const formRef = useRef()

    const sendForm = (e) => {
        e.preventDefault()
    }

    return (
        <Form onSubmit={sendForm} formRef={formRef}>
            <h1 className={style.title}>Tizimga kirish</h1>
            <Input name='contact' type='text' placeholder='Email or phone' required={true}/>
            <Input name='password' type='password' placeholder='Password' required={true}/>
            <button type='submit' className={style.btn}>Tizimga kirish</button>
            <Link to='/register' className={style.link}>Royhatdan otish</Link>
        </Form>
    );
}

export default Login;
