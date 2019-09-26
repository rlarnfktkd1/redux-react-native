import { createStore } from 'redux';
import allReducers from './Reducer';

const store = createStore(allReducers);
console.log(store);

export default store;