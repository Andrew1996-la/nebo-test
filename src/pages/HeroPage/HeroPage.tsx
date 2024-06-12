import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Base from '../../components/HeroInfo/Base/Base';
import Films from '../../components/HeroInfo/Films/Films';
import Species from '../../components/HeroInfo/Species/Species';
import Starships from '../../components/HeroInfo/Starships/Starships';
import Vehicles from '../../components/HeroInfo/Vehicles/Vehicles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getHero, resetHero } from '../../store/heroesSlice';
import { HeroType } from '../../store/types';

const HeroPage = () => {
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
        return <p>Loading...</p>;
    }

    return (
        <>
            <Base
                name={hero.name}
                birth_year={hero.birth_year}
                eye_color={hero.eye_color}
                gender={hero.gender}
                hair_color={hero.hair_color}
                height={hero.height}
                mass={hero.mass}
                skin_color={hero.skin_color}
            />
            {hero.films.length > 0 && <Films films={hero.films} />}
            {hero.species.length > 0 && <Species species={hero.species} />}
            {hero.starships.length > 0 && (
                <Starships starships={hero.starships} />
            )}
            {hero.vehicles.length > 0 && <Vehicles vehicles={hero.vehicles} />}
            <button onClick={goBack}>Back</button>
        </>
    );
};

export default HeroPage;
