import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    todos: todoReducer,
    visibilityFilter: visibilityFilter
});

export default rootReducer;