import { FC } from 'react';
import { VehiclesType } from '../../../store/types';
import s from '../heroInfo.module.css';

type VehiclesProps = {
    vehicles: VehiclesType[];
};

const Vehicles: FC<VehiclesProps> = ({ vehicles }) => {
    return (
        <div className={s.generalBlock}>
            <h2 className={s.chapterName}>Vehicles</h2>
            {vehicles.map((vehicle: VehiclesType) => {
                return (
                    <div key={vehicle.url}>
                        <h3>Vehicle name: {vehicle.name}</h3>
                        <div>Vehicle model: {vehicle.model}</div>
                        <div>Manufacturer: {vehicle.manufacturer}</div>
                        <div>
                            Max atmosphering speed:{' '}
                            {vehicle.max_atmosphering_speed}
                        </div>
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default Vehicles;
