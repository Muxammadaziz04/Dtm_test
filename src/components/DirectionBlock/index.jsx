import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate, useNavigate } from 'react-router-dom';

import FacultyItem from './FacultyItem';
import TableItem from './TableItem';
import CustomSelect from './CustomSelect';

import style from './DirectionBlock.module.scss'
import { HOST } from '../../constants';

const DirectionBlock = () => {
    const navigate = useNavigate()
    const [universities, setUniversities] = useState([])
    const [faculties, setFaculties] = useState([])
    const [facultyInfo, setFacultyInfo] = useState([])
    const { first_subject, second_subject } = useSelector(state => state.subjectsReducer)
    const token = JSON.parse(localStorage.getItem('token'))

    const addFaculty = (faculty) => {
        if (faculties.length >= 5) return
        const oldFaculty = faculties.find(el => el.faculty_id === faculty.faculty_id)
        if (oldFaculty) return
        setFaculties(state => [...state, faculty])
    }

    const deleteFaculty = (faculty_id) => {
        setFaculties(state => state.filter(faculty => faculty.faculty_id !== faculty_id))
    }

    const getInfo = (faculty_id) => {
        fetch(`${HOST}/faculties/${faculty_id}`)
        .then(res => res.json())
        .then(res => {
            if(res.status === 200) {
                setFacultyInfo(res.data)
                console.log(res.data);
            } else {
                alert(res.error || res.message)
            }
        })
    }

    useEffect(() => {
        if (!first_subject || !second_subject) return navigate('/science')
        fetch(`${HOST}/universities?first_subject=${first_subject}&second_subject=${second_subject}`)
            .then(res => res.json())
            .then(res => {
                if (res.status === 200) {
                    setUniversities(res.data)
                } else {
                    alert(res.error || res.message)
                }
            })
    }, [first_subject, second_subject, navigate])

    if (!token) return <Navigate to='/login' />

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
                    Yonalish tanlash
                    {
                        universities.length > 0 && universities.map(university => (
                            <CustomSelect 
                                key={university.university_id} 
                                name={university.university_name} 
                                array={university.faculties} 
                                func={addFaculty} 
                                onHover={getInfo}
                            />
                        ))
                    }
                </label>
                <span>
                    <div className={faculties.length ? style.directionBlock__facultyBlokc : style.none}>
                        {
                            faculties.length > 0 && faculties.map((faculty, index) => (
                                <FacultyItem key={faculty.faculty_id} faculty={faculty} func={deleteFaculty} count={index + 1} />
                            ))
                        }
                    </div>
                    <div className={facultyInfo.length ? style.directionBlock__facultyInfo : style.none}>
                        <h2 className={style.directionBlock__facultyInfo__title}>{facultyInfo[0]?.faculty_name}</h2>
                        <p className={style.directionBlock__facultyInfo__desc}>{facultyInfo[0]?.region_name}</p>
                        <TableItem name={'Grant'} count={facultyInfo[0]?.grant_count} ball={facultyInfo[0]?.passing_score_grant} />
                        <TableItem name={'Shartnoma'} count={facultyInfo[0]?.contract_count} ball={facultyInfo[0]?.passing_score_contract} />
                    </div>
                </span>
            </div>
        </div>
    );
}

export default DirectionBlock;
