import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/combineReducers';

// const middleware = applyMiddleware(thunk, createLogger());

const middleware = applyMiddleware(thunk);

export default createStore(rootReducer, middleware);
