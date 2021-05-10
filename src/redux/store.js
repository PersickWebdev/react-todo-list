import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { tasksReducer } from './reducers';

const reducers = combineReducers({
    tasksReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));