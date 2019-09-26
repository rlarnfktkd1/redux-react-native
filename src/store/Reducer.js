import { combineReducers } from 'redux';
import { navigatorReducer } from '../navigator';
import count from "./Count/Count.store"

const allReducers = combineReducers({
  navigator: navigatorReducer,
  count
});

export default allReducers;