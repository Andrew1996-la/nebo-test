import { FC } from 'react';
import s from './pagination.module.css';

type PaginationProps = {
    pagesElem: number[];
    handleClick: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({ pagesElem, handleClick }) => {
    return (
        <div className={s.paginationList}>
            {pagesElem.map((page: number) => {
                return (
                    <span
                        onClick={() => handleClick(page)}
                        className={s.paginationItem}
                        key={page}
                    >
                        {page}
                    </span>
                );
            })}
        </div>
    );
};

export default Pagination;
