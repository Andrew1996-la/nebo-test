import { FC } from 'react';
import { HeroType } from '../../store/types';
import HeroItemContainer from '../HeroItem/HeroItemContainer';
import s from './heroesList.module.css';

type HeroListProps = {
    heroList: HeroType[];
};

const HeroList: FC<HeroListProps> = ({ heroList }) => {
    return (
        <div className={s.heroList}>
            {heroList.map((hero: HeroType) => {
                return <HeroItemContainer key={hero.url} {...hero} />;
            })}
        </div>
    );
};

export default HeroList;
