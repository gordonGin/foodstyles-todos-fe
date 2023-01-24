import { combineReducers } from 'redux';
import { userReducer } from './duck/user';
import { todoReducer } from './duck/todo';

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

export default rootReducer;
