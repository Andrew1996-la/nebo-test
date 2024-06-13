import { useAppSelector } from '../../hooks';
import HeroList from './HeroesList';

const HeroListContainer = () => {
    const heroList = useAppSelector((state) => state.heroes.heroesList);
    const loading = useAppSelector((state) => state.heroes.loading);
    const error = useAppSelector((state) => state.heroes.error);

    if (loading) {
        return <>loading</>;
    }

    if (error) {
        return <>error</>;
    }

    if (heroList.length === 0) {
        return <div>hero not found</div>;
    }

    return <HeroList heroList={heroList} />;
};

export default HeroListContainer;
