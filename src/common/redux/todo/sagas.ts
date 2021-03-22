import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
    deleteTodoFailure,
    deleteTodoSuccess,
    fetchTodoFailure,
    fetchTodoSuccess,
    newTodoFailure,
    newTodoSuccess,
    updateTodoSuccess,
} from './actions';
import { DeleteTodoAction, NewTodoAction, TodoItemType, TODO_ACTIONS, UpdateTodoAction } from './actionTypes';
import todoServices from './service';

function* fetchTodosSaga() {
    try {
        //get data
        const todos: TodoItemType[] = yield call(todoServices.fetchAll);
        yield put(fetchTodoSuccess(todos));
    } catch (error) {
        yield put(fetchTodoFailure());
    }
}
function* createTodoSaga(action: NewTodoAction) {
    try {
        yield put(newTodoSuccess({ ...action.payload }));
    } catch (error) {
        yield put(newTodoFailure());
    }
}
function* updateTodoSaga(action: UpdateTodoAction) {
    try {
        yield put(updateTodoSuccess({ ...action.payload }));
    } catch (error) {
        yield put(deleteTodoFailure());
    }
}
function* deleteTodoSaga(action: DeleteTodoAction) {
    try {
        yield put(deleteTodoSuccess({ ...action.payload }));
    } catch (error) {
        yield put(deleteTodoFailure());
    }
}
function* watchAll() {
    yield takeLatest(TODO_ACTIONS.FETCH_TODO, fetchTodosSaga);
    yield takeEvery(TODO_ACTIONS.NEW_TODO, createTodoSaga);
    yield takeEvery(TODO_ACTIONS.UPDATE_TODO, updateTodoSaga);
    yield takeEvery(TODO_ACTIONS.DELETE_TODO, deleteTodoSaga);
}
export default watchAll();
