import { TODO_ACTIONS, TodoItemType } from './actionTypes';
export interface TodoState {
    todoList: TodoItemType[];
}
const initialState: TodoState = {
    todoList: [],
};

const todoReducer = (state = initialState, action: any): TodoState => {
    switch (action.type) {
        //fetch todos
        case TODO_ACTIONS.FETCH_TODO_SUCCESS:
            return { ...state, todoList: [...state.todoList, ...action.payload] };
        case TODO_ACTIONS.FETCH_TODO_FAILURE:
            return { ...state, todoList: [...state.todoList] };
        //create todo
        case TODO_ACTIONS.NEW_TODO_SUCCESS:
            return { ...state, todoList: [...state.todoList, action.payload] };
        case TODO_ACTIONS.NEW_TODO_FAILURE:
            return { ...state, todoList: [...state.todoList] };
        //update todo
        case TODO_ACTIONS.UPDATE_TODO_SUCCESS:
            return {
                ...state,
                todoList: [...state.todoList.map((item) => (item.id === action.payload.id ? action.payload : item))],
            };
        case TODO_ACTIONS.UPDATE_TODO_FAILURE:
            return { ...state, todoList: [...state.todoList] };
        //delete todo
        case TODO_ACTIONS.DELETE_TODO_SUCCESS:
            return { ...state, todoList: [...state.todoList.filter((item) => item.id !== action.payload.id)] };
        case TODO_ACTIONS.DELETE_TODO_FAILURE:
            return { ...state, todoList: [...state.todoList] };
        //default
        default:
            return state;
    }
};
export default todoReducer;
