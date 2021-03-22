import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroller from 'react-infinite-scroller';

import AppConstants from '../../common/constants/app';
import { GlobalState } from '../../common/redux';
import { fetchTodo } from '../../common/redux/todo/actions';
import { TodoItemType } from '../../common/redux/todo/actionTypes';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';

// import Pagination from './components/Pagination/Pagination';

import TodoForm from './components/TodoForm/TodoForm';
import TodoItem from './components/TodoItem/TodoItem';
import './TodoStyles.scss';

const Todo: React.FunctionComponent = (): React.ReactElement => {
    const todoList = useSelector((state: GlobalState) => state.todo.todoList.reverse());

    const dispatch = useDispatch();
    const [selectedPage, setSelectedPage] = useState(0);

    useEffect(() => {
        if (todoList.length === 0) {
            dispatch(fetchTodo());
        }
    }, []);

    // const handlePaginate = ({ selected }: any): void => {
    //     window.scrollTo(0, 0);
    //     setSelectedPage(selected);
    // };
    const handleLoadMore = (): void => {
        setTimeout(() => {
            setSelectedPage(selectedPage + 1);
        }, 1000);
    };

    return (
        <div className="todo-list">
            <Header tabs={AppConstants.tabSetting} />
            <div className="todo-list__paper pd-3 shadow">
                <div className="todo-list__paper__sticky">
                    <div className="todo-list__paper__sticky__title">
                        <h1>Todo List</h1>
                    </div>
                    <div className="todo-list__paper__sticky__form">
                        <TodoForm />
                    </div>
                </div>
                {todoList.length > 0 && (
                    <>
                        <div className="todo-lis__paper__list">
                            <InfiniteScroller
                                pageStart={0}
                                loadMore={handleLoadMore}
                                hasMore={Math.ceil(todoList.length / 10) >= selectedPage ? true : false}
                                loader={<Loading key={0} />}
                            >
                                {todoList.length ? (
                                    todoList
                                        .slice(0, selectedPage * 10 + 10)
                                        .map((item: TodoItemType) => <TodoItem key={item.id} item={item} />)
                                ) : (
                                    <h2 className="todo-list__paper__list--null">Nothing here</h2>
                                )}
                            </InfiniteScroller>
                        </div>
                        {/* <Pagination onPageChange={handlePaginate} /> */}
                    </>
                )}
            </div>
        </div>
    );
};
export default Todo;
