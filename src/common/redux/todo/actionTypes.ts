export const TODO_ACTIONS = {
    FETCH_TODO: 'FETCH_TODO',
    FETCH_TODO_SUCCESS: 'FETCH_TODO_SUCCESS',
    FETCH_TODO_FAILURE: 'FETCH_TODO_FAILURE',
    NEW_TODO: 'NEW_TODO',
    NEW_TODO_SUCCESS: 'NEW_TODO_SUCCESS',
    NEW_TODO_FAILURE: 'NEW_TODO_FAILURE',
    UPDATE_TODO: 'UPDATE_TODO',
    UPDATE_TODO_SUCCESS: 'UPDATE_TODO_SUCCESS',
    UPDATE_TODO_FAILURE: 'UPDATE_TODO_FAILURE',
    DELETE_TODO: 'DELETE_TODO',
    DELETE_TODO_SUCCESS: 'DELETE_TODO_SUCCESS',
    DELETE_TODO_FAILURE: 'DELETE_TODO_FAILURE',
};
interface TodoItemType {
    id: number;
    title: string;
    updatedAt: Date;
    userId: number;
    completed: boolean;
}
interface FetchTodoAction {
    type: typeof TODO_ACTIONS.FETCH_TODO;
}
interface FetchTodoSuccess {
    type: typeof TODO_ACTIONS.FETCH_TODO_SUCCESS;
    payload: TodoItemType[];
}
interface FetchTodoFailure {
    type: typeof TODO_ACTIONS.FETCH_TODO_FAILURE;
}
interface NewTodoAction {
    type: typeof TODO_ACTIONS.NEW_TODO;
    payload: TodoItemType;
}
interface NewTodoSuccess {
    type: typeof TODO_ACTIONS.NEW_TODO_SUCCESS;
    payload: TodoItemType;
}
interface NewTodoFailure {
    type: typeof TODO_ACTIONS.NEW_TODO_FAILURE;
}
interface UpdateTodoAction {
    type: typeof TODO_ACTIONS.UPDATE_TODO;
    payload: TodoItemType;
}
interface UpdateTodoSuccess {
    type: typeof TODO_ACTIONS.UPDATE_TODO_SUCCESS;
    payload: TodoItemType;
}
interface UpdateTodoFailure {
    type: typeof TODO_ACTIONS.UPDATE_TODO_FAILURE;
}
interface DeleteTodoAction {
    type: typeof TODO_ACTIONS.DELETE_TODO;
    payload: TodoItemType;
}
interface DeleteTodoSuccess {
    type: typeof TODO_ACTIONS.DELETE_TODO_SUCCESS;
    payload: TodoItemType;
}
interface DeleteTodoFailure {
    type: typeof TODO_ACTIONS.DELETE_TODO_FAILURE;
}

export type {
    FetchTodoAction,
    FetchTodoSuccess,
    FetchTodoFailure,
    TodoItemType,
    NewTodoAction,
    NewTodoSuccess,
    NewTodoFailure,
    UpdateTodoAction,
    UpdateTodoSuccess,
    UpdateTodoFailure,
    DeleteTodoAction,
    DeleteTodoSuccess,
    DeleteTodoFailure,
};
