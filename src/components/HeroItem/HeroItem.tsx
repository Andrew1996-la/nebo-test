import { FC } from 'react';
import { HeroType } from '../../store/types';
import s from './heroItem.module.css';

type HeroItemProps = HeroType & {
    openHeroPage: (name: string) => void;
};

const HeroItem: FC<HeroItemProps> = ({
    name,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
    openHeroPage,
}) => {
    return (
        <div onClick={() => openHeroPage(name)} className={s.heroItem}>
            <h3>{name}</h3>
            <p>Birth Year: {birth_year}</p>
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
