import HeroListContainer from '../../components/HeroesList/HeroListContainer';
import HistoryContainer from '../../components/History/HistoryContainer';
import PaginationContainer from '../../components/Pagination/PaginationContainer';
import SearchHeroContariner from '../../components/SearchHero/SearchHeroContariner';

const MainPage = () => {
    return (
        <>
            <PaginationContainer />
            <SearchHeroContariner />
            <HistoryContainer />
            <HeroListContainer />
        </>
    );
};

export default MainPage;
