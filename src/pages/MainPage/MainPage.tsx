import HeroListContainer from '../../components/HeroesList/HeroListContainer';
import PaginationContainer from '../../components/Pagination/PaginationContainer';

const MainPage = () => {
    return (
        <>
            <PaginationContainer />
            <HeroListContainer />
        </>
    );
};

export default MainPage;
