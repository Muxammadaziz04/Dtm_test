import React, { useRef } from 'react';
import { Link } from 'react-router-dom'

import Form from '../Form';
import Input from '../Input';
import Radio from '../Radio';
import Select from '../../Select';

import style from './Register.module.scss'

const Register = () => {
    const formRef = useRef()

    const country = [
        'andijon viloyati', 
        'buxoro viloyati', 
        'fargʻona viloyati', 
        'jizzax viloyati', 
        'xorazm viloyati', 
        'namangan viloyati', 
        'navoi viloyati', 
        'qashqadaryo viloyati', 
        'qoraqalpog\'iston respublikasi', 
        'samarqand viloyati', 
        'sirdaryo viloyati', 
        'surxondaryo viloyati', 
        'toshkent viloyati',
        'toshkent shaxri'
    ]

    const sendForm = (e) => {
        e.preventDefault()
    }

    return (
        <Form onSubmit={sendForm} formRef={formRef}>
            <h1 className={style.title}>Royhatdan otish</h1>
            <Input name='fullName' type='text' placeholder='Full name' required={true}/>
            <Input name='contact' type='text' placeholder='Email or phone' required={true}/>
            <Input name='username' type='text' placeholder='Username' />
            <Select arr={country} name='country' className={style.select}/>
            <Input name='password' type='password' placeholder='Password' required={true}/>
            <Radio name="gender" value='erkak' text='Erkak' chekced={true}/>
            <Radio name="gender" value='ayol' text='Ayol'/>
            <button type='submit' className={style.btn}>Royhatdan otish</button>
            <Link to='/login' className={style.link}>Hisobingiz bormi? Kirish</Link>
        </Form>
    );
}

export default Register;
