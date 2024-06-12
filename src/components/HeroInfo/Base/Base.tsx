import { FC } from 'react';
import { HeroType } from '../../../store/types';
import s from '../heroInfo.module.css';

type BaseProps = Omit<
    HeroType,
    | 'homeworld'
    | 'films'
    | 'species'
    | 'starships'
    | 'vehicles'
    | 'url'
    | 'created'
    | 'edited'
>;

const Base: FC<BaseProps> = ({
    name,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
}) => {
    return (
        <div className={s.generalBlock}>
            <h1>{name}</h1>
            <p>Birth Year: {birth_year}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Gender: {gender}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass} kg</p>
            <p>Skin Color: {skin_color}</p>
        </div>
    );
};

export default Base;
