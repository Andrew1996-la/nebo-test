import HeroListContainer from '../../components/HeroesList/HeroListContainer';
import PaginationContainer from '../../components/Pagination/PaginationContainer';

const MainPage = () => {
    return (
        <>
            <h1>main page</h1>
            <PaginationContainer />
            <HeroListContainer />
        </>
    );
};

export default MainPage;
