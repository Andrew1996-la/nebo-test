import { FC } from "react";
import { HeroType } from "../../store/types";
import Base from "../HeroInfo/Base/Base";
import Films from "../HeroInfo/Films/Films";
import Species from "../HeroInfo/Species/Species";
import Starships from "../HeroInfo/Starships/Starships";
import Vehicles from "../HeroInfo/Vehicles/Vehicles";

type AboutHeroProps = {
    hero: HeroType
    goBack: () => void
}

const AboutHero: FC<AboutHeroProps> = ({hero, goBack}) => {
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

export default AboutHero;
