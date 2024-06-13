import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { searchHero } from '../../store/heroesSlice';
import SearchHero from './SearchHero';

const SearchHeroContariner = () => {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(searchHero(value));
        }
    };

    const handleClick = () => {
        dispatch(searchHero(value));
    };
    return (
        <SearchHero
            value={value}
            handleChange={handleChange}
            handleSearch={handleSearch}
            handleClick={handleClick}
        />
    );
};

export default SearchHeroContariner;
