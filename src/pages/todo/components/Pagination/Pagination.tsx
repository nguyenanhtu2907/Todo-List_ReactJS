import classNames from 'classnames';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import { useHeightAndWidth } from '../../../../common/hooks/useHeightAndWidth';
import { GlobalState } from '../../../../common/redux';

import './PaginationStyles.scss';

interface PaginationProps {
    onPageChange: (selected: { selected: number }) => void;
}
const Pagination: React.FunctionComponent<PaginationProps> = ({ onPageChange }): React.ReactElement => {
    const todoList = useSelector((state: GlobalState) => state.todo.todoList);
    const { width } = useHeightAndWidth();

    return (
        <div className={classNames(['react-paginate', { 'dp-none': todoList.length <= 10 }])}>
            <ReactPaginate
                pageCount={Math.ceil(todoList.length / 10)}
                pageRangeDisplayed={width >= 768 ? 3 : 0}
                marginPagesDisplayed={width >= 768 ? 1 : 0}
                previousLabel={'Trang trước'}
                nextLabel={'Tiếp theo'}
                activeClassName={'react-paginate--chosen-link'}
                initialPage={0}
                disableInitialCallback={false}
                onPageChange={(selected) => onPageChange(selected)}
            />
        </div>
    );
};
export default Pagination;
