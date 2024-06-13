import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import History from './History';

const HistoryContainer = () => {
    const navigate = useNavigate();
    const historyList = useAppSelector((state) => state.heroes.history);
    const openHeroPage = (name: string) => {
        navigate(`/hero/${name}`);
    };
    if (historyList.length === 0) return;

    return <History openHeroPage={openHeroPage} historyList={historyList} />;
};

export default HistoryContainer;
