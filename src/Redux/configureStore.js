import { combineReducers, createStore } from 'redux';
import hatsReducer from './reducers/hatsReducer';

const rootReducer = combineReducers({
  hats: hatsReducer,
});

const store = createStore(
  rootReducer,
);

export default store;
