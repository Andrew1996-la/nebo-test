import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getHero, resetHero } from '../../store/heroesSlice';
import { HeroType } from '../../store/types';
import Loading from '../Loading/Loadint';
import AboutHero from './AboutHero';

const AboutHeroContainer = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { name } = useParams();
    const hero: HeroType | null = useAppSelector((state) => state.heroes.hero);

    const goBack = () => {
        dispatch(resetHero());
        navigate(-1);
    };

    useEffect(() => {
        dispatch(getHero(name as string));
    }, [name, dispatch]);

    if (!hero) {
        return <Loading />;
    }

    return <AboutHero hero={hero} goBack={goBack} />;
};

export default AboutHeroContainer;
