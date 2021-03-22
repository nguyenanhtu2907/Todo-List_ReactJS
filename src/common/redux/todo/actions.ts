import {
    TODO_ACTIONS,
    NewTodoAction,
    UpdateTodoAction,
    DeleteTodoAction,
    TodoItemType,
    NewTodoSuccess,
    NewTodoFailure,
    UpdateTodoSuccess,
    UpdateTodoFailure,
    DeleteTodoSuccess,
    DeleteTodoFailure,
    FetchTodoAction,
    FetchTodoSuccess,
    FetchTodoFailure,
} from './actionTypes';
export const fetchTodo = (): FetchTodoAction => {
    return {
        type: TODO_ACTIONS.FETCH_TODO,
    };
};
export const fetchTodoSuccess = (todoList: TodoItemType[]): FetchTodoSuccess => {
    return {
        type: TODO_ACTIONS.FETCH_TODO_SUCCESS,
        payload: todoList,
    };
};
export const fetchTodoFailure = (): FetchTodoFailure => {
    return {
        type: TODO_ACTIONS.FETCH_TODO_FAILURE,
    };
};
export const newTodo = (todoItem: TodoItemType): NewTodoAction => {
    return {
        type: TODO_ACTIONS.NEW_TODO,
        payload: todoItem,
    };
};
export const newTodoSuccess = (todoItem: TodoItemType): NewTodoSuccess => {
    return {
        type: TODO_ACTIONS.NEW_TODO_SUCCESS,
        payload: todoItem,
    };
};
export const newTodoFailure = (): NewTodoFailure => {
    return {
        type: TODO_ACTIONS.NEW_TODO_FAILURE,
    };
};
export const updateTodo = (todoItem: TodoItemType): UpdateTodoAction => {
    return {
        type: TODO_ACTIONS.UPDATE_TODO,
        payload: todoItem,
    };
};
export const updateTodoSuccess = (todoItem: TodoItemType): UpdateTodoSuccess => {
    return {
        type: TODO_ACTIONS.UPDATE_TODO_SUCCESS,
        payload: todoItem,
    };
};
export const updateTodoFailure = (): UpdateTodoFailure => {
    return {
        type: TODO_ACTIONS.UPDATE_TODO_FAILURE,
    };
};
export const deleteTodo = (todoItem: TodoItemType): DeleteTodoAction => {
    return {
        type: TODO_ACTIONS.DELETE_TODO,
        payload: todoItem,
    };
};
export const deleteTodoSuccess = (todoItem: TodoItemType): DeleteTodoSuccess => {
    return {
        type: TODO_ACTIONS.DELETE_TODO_SUCCESS,
        payload: todoItem,
    };
};
export const deleteTodoFailure = (): DeleteTodoFailure => {
    return {
        type: TODO_ACTIONS.DELETE_TODO_FAILURE,
    };
};
