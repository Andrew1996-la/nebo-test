import { useAppSelector } from '../../hooks';
import Loading from '../Loading/Loadint';
import HeroList from './HeroesList';
import s from './heroesList.module.css';

const HeroListContainer = () => {
    const heroList = useAppSelector((state) => state.heroes.heroesList);
    const loading = useAppSelector((state) => state.heroes.loading);

    if (loading) {
        return <Loading />;
    }

    if (heroList.length === 0) {
        return <div className={s.heroNotFound}>Hero not found.</div>;
    }

    return <HeroList heroList={heroList} />;
};

export default HeroListContainer;
