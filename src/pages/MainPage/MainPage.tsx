import HeroListContainer from '../../components/HeroesList/HeroListContainer';
import PaginationContainer from '../../components/Pagination/PaginationContainer';
import SearchHeroContariner from '../../components/SearchHero/SearchHeroContariner';

const MainPage = () => {
    return (
        <>
            <PaginationContainer />
            <SearchHeroContariner />
            <HeroListContainer />
        </>
    );
};

export default MainPage;
