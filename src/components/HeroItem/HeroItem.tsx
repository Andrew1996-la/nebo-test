import { FC } from 'react';
import { HeroType } from '../../store/types';
import s from './heroItem.module.css';

const HeroItem: FC<HeroType> = ({
    name,
    birth_years,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
}) => {
    return (
        <div className={s.heroItem}>
            <h3>{name}</h3>
            <p>Birth Year: {birth_years}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Gender: {gender}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Skin Color: {skin_color}</p>
        </div>
    );
};
export default HeroItem;
