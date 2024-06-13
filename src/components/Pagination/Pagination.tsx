import classNames from 'classnames';
import { FC } from 'react';
import s from './pagination.module.css';

type PaginationProps = {
    pagesElem: number[];
    handleClick: (page: number) => void;
    currentPage: number;
};

const Pagination: FC<PaginationProps> = ({
    pagesElem,
    handleClick,
    currentPage,
}) => {
    return (
        <div className={s.paginationList}>
            {pagesElem.map((page: number) => {
                return (
                    <span
                        onClick={() => handleClick(page)}
                        className={classNames(s.paginationItem, {
                            [s.paginationItemActive]: currentPage === page,
                        })}
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
