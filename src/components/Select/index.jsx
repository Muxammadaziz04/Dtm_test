import React from 'react';

const Select = ({name, onChange, arr, className}) => {
    
    if(!arr) return <></>

    return (
        <select name={name} onChange={onChange} className={className}>
            {
                arr?.length > 0 && arr.map((el, index) => <option key={index} value={el}>{el}</option>)
            }
        </select>
    );
}

export default Select;
