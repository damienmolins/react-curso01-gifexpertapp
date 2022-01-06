import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        console.log('Handle InputChange...');
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log('Handle Submit...');
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}>
            </input>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}