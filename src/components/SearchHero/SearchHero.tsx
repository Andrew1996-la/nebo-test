import React, { FC } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import s from './searchHero.module.css';

type SearchHeroProps = {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleClick: () => void;
};

const SearchHero: FC<SearchHeroProps> = ({
    value,
    handleChange,
    handleSearch,
    handleClick,
}) => {
    return (
        <>
            <Input
                value={value}
                onChange={handleChange}
                className={s.input}
                placeholder='search your favorite hero'
                onKeyDown={handleSearch}
            />
            <Button className={s.button} onClick={handleClick}>
                search
            </Button>
        </>
    );
};

export default SearchHero;
