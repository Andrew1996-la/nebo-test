import { FC } from 'react';
import { StarshipsType } from '../../../store/types';
import s from '../heroInfo.module.css';

type StarshipsProps = {
    starships: StarshipsType[];
};

const Starships: FC<StarshipsProps> = ({ starships }) => {
    return (
        <div className={s.generalBlock}>
            <h2 className={s.chapterName}>Starships</h2>
            {starships.map((starship: StarshipsType) => {
                return (
                    <div key={starship.url}>
                        <h3>Starship name: {starship.name}</h3>
                        <div>Starship model: {starship.model}</div>
                        <div>Manufacturer: {starship.manufacturer}</div>
                        <div>
                            Max atmosphering speed:{' '}
                            {starship.max_atmosphering_speed}
                        </div>
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default Starships;
