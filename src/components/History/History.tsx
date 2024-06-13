import { FC } from 'react';
import s from './history.module.css';

type HistoryProps = {
    historyList: string[];
    openHeroPage: (name: string) => void;
};

const History: FC<HistoryProps> = ({ historyList, openHeroPage }) => {
    return (
        <div className={s.history}>
            <h3>History:</h3>
            <div className={s.historyList}>
                {historyList.map((name: string, index: number) => {
                    return (
                        <div
                            className={s.historyName}
                            key={index}
                            onClick={() => openHeroPage(name)}
                        >
                            {name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default History;
