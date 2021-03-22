import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { useHeightAndWidth } from '../../../../common/hooks/useHeightAndWidth';
import { newTodo } from '../../../../common/redux/todo/actions';
import './TodoFormStyles.scss';

const TodoForm: React.FunctionComponent = (): React.ReactElement => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const { width } = useHeightAndWidth();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch(
                newTodo({
                    id: new Date().getTime(),
                    userId: 1,
                    title: inputValue.trim(),
                    completed: false,
                    updatedAt: new Date(),
                }),
            );
        }
        window.scrollTo(0, 0);
        setInputValue('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                className={classNames(['todo-form__input', { 'todo-form__input--mobile': width < 768 }])}
                type="text"
                autoComplete="off"
                placeholder="Type something here."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {width >= 768 ? (
                <button className="todo-form__button submit" style={{ borderLeft: 'none' }} type="submit">
                    Submit
                </button>
            ) : (
                <Button type="submit" fullWidth variant="contained" color="primary">
                    Submit
                </Button>
            )}
        </form>
    );
};
export default TodoForm;
