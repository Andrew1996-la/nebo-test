import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { addToHistory } from '../../store/heroesSlice';
import { HeroType } from '../../store/types';
import HeroItem from './HeroItem';

const HeroItemContainer: FC<HeroType> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const openHeroPage = (name: string) => {
        dispatch(addToHistory(name));
        navigate(`/hero/${name}`);
    };
    return <HeroItem openHeroPage={openHeroPage} {...props} />;
};

export default HeroItemContainer;
