import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroType } from '../../store/types';
import HeroItem from './HeroItem';

const HeroItemContainer: FC<HeroType> = (props) => {
    const navigate = useNavigate();
    const openHeroPage = (name: string) => {
        navigate(`/hero/${name}`);
    };
    return <HeroItem openHeroPage={openHeroPage} {...props} />;
};

export default HeroItemContainer;
