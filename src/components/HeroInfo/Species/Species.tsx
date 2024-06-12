import { FC } from 'react';
import { SpeciesType } from '../../../store/types';
import s from '../heroInfo.module.css';

type SpeciesProps = {
    species: SpeciesType[];
};

const Species: FC<SpeciesProps> = ({ species }) => {
    return (
        <div className={s.generalBlock}>
            <h2 className={s.chapterName}>Species</h2>
            {species.map((specie: SpeciesType) => {
                return (
                    <div key={specie.url}>
                        <h3>Specie name: {specie.name}</h3>
                        <div>Classification: {specie.classification}</div>
                        <div>Designation: {specie.designation}</div>
                        <div>Language: {specie.language}</div>
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default Species;
