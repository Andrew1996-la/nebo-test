import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getHeroes } from '../../store/heroesSlice';
import HeroList from './HeroesList';

const HeroListContainer = () => {
    const dispatch = useAppDispatch();
    const heroList = useAppSelector((state) => state.heroes.heroesList);
    const loading = useAppSelector((state) => state.heroes.loading);
    const error = useAppSelector((state) => state.heroes.error);

    useEffect(() => {
        dispatch(getHeroes());
    }, []);

    if (loading) {
        return <>loading</>;
    }

    if (error) {
        return <>error</>;
    }

    return <HeroList heroList={heroList}/>;
};

export default HeroListContainer;
