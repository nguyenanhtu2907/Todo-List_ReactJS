import { Button, IconButton } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import classNames from 'classnames';

import { deleteTodo, updateTodo } from '../../../../common/redux/todo/actions';
import { TodoItemType } from '../../../../common/redux/todo/actionTypes';
import './TodoItemStyles.scss';

interface TodoItemProps {
    item: TodoItemType;
}
const TodoItem: React.FunctionComponent<TodoItemProps> = ({ item }): React.ReactElement => {
    const dispatch = useDispatch();
    const [modifyMode, setModifyMode] = useState(false); //is item in modify mode?
    const [isExpand, setIsExpand] = useState(false); //is item expanding
    const { title, completed, updatedAt } = item;
    const [newItem, setNewItem] = useState(item);

    //handle time of item
    const timeString = dayjs(updatedAt).format('HH:mm:ss DD/MM/YYYY');
    //handle click check icon
    const handleDoneItem = () => {
        dispatch(updateTodo({ ...newItem, completed: !completed }));
    };
    //handle change value of input
    const handleChangeNewItem = (e: any) => {
        setNewItem({
            ...newItem,
            title: e.target.value.trim(),
            updatedAt: new Date(),
        });
    };
    //update item in store
    const handleUpdate = () => {
        if (newItem.title.trim()) {
            dispatch(updateTodo(newItem));
        }
        setModifyMode(false);
    };
    //delete item from store
    const handleDelete = () => {
        if (!modifyMode) {
            dispatch(deleteTodo(newItem));
        }
    };

    return (
        <div className={`todo-item pdf-3 pdr-3 `}>
            <div className="todo-item__title-block">
                <div className="todo-item__title-block__check-icon" onClick={handleDoneItem}>
                    <IconButton size="small">
                        {completed ? (
                            <CheckCircleIcon color="primary" fontSize="large" />
                        ) : (
                            <CheckCircleOutlineIcon fontSize="large" />
                        )}
                    </IconButton>
                </div>
                <div className={classNames(['todo-item__title-block__title', { 'text-done': completed }])}>
                    {modifyMode ? (
                        <input
                            type="text"
                            autoComplete="off"
                            defaultValue={newItem.title}
                            onChange={handleChangeNewItem}
                            className="todo-item__input"
                        />
                    ) : (
                        <h4>{title}</h4>
                    )}
                </div>
                <div
                    className="todo-item__title-block__expand-icon"
                    onClick={() => !modifyMode && setIsExpand(!isExpand)}
                >
                    <IconButton disabled={modifyMode && true} size="small">
                        {isExpand ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
                    </IconButton>
                </div>
            </div>
            <div className={classNames(['todo-item__content-block', { 'expand-less': !isExpand }])}>
                {updatedAt && (
                    <div className="todo-item__content-block__time">
                        <span>{`Cập nhật vào: ${timeString}`}</span>
                    </div>
                )}
                <div className="todo-item__content-block__options">
                    {/* modify delete update button */}
                    <div
                        className="todo-item__content-block__options__button"
                        onClick={() => !completed && setModifyMode(true)}
                    >
                        <Button variant="contained" color="primary" disabled={completed || modifyMode} size="small">
                            Chỉnh sửa
                        </Button>
                    </div>
                    <div className="todo-item__content-block__options__button" onClick={handleDelete}>
                        <Button variant="contained" color="secondary" size="small" disabled={modifyMode}>
                            Xóa
                        </Button>
                    </div>
                    {modifyMode && (
                        <div className="todo-item__content-block__options__button" onClick={handleUpdate}>
                            <Button variant="contained" color="primary" size="small">
                                Cập nhật
                            </Button>
                        </div>
                    )}
                </div>
                {/* <div className="todo-item__content-block__text">
                    <p>{}</p>
                </div> */}
            </div>
        </div>
    );
};

export default TodoItem;
