import { FC } from 'react';
import { FilmType } from '../../../store/types';
import s from '../heroInfo.module.css';

type FilmsProps = {
    films: FilmType[];
};

const Films: FC<FilmsProps> = ({ films }) => {
    return (
        <div className={s.generalBlock}>
            {films.map((film: FilmType) => {
                return (
                    <div key={film.url}>
                        <h3>Title: {film.title}</h3>
                        <div>Episode: {film.episode_id}</div>
                        <div>Director: {film.director}</div>
                        <div>Producer: {film.producer}</div>
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default Films;
