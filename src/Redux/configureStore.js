import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import hatsReducer from './reducers/hatsReducer';
import accountReducer from './reducers/accountReducer';

const rootReducer = combineReducers({
  hats: hatsReducer,
  account: accountReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
