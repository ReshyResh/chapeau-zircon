import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import hatsReducer from './reducers/hatsReducer';

const rootReducer = combineReducers({
  hats: hatsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
