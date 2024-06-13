import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getHeroes, setPage } from '../../store/heroesSlice';
import Pagination from './Pagination';

const PaginationContainer = () => {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector((state) => state.heroes.currentPage);
    const totalPage = useAppSelector((state) => state.heroes.totalPage);
    const pageSize = 10;

    const countPage = Math.ceil(totalPage / pageSize);

    const pagesElem: number[] = [];
    for (let i = 0; i < countPage; i++) {
        pagesElem.push(i + 1);
    }

    const handleClick = (page: number) => {
        dispatch(setPage(page));
    };

    useEffect(() => {
        dispatch(getHeroes(currentPage));
    }, [currentPage, dispatch]);

    return (
        <Pagination
            currentPage={currentPage}
            pagesElem={pagesElem}
            handleClick={handleClick}
        />
    );
};

export default PaginationContainer;
