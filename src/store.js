import { createStore, applyMiddleware } from 'redux';
import compareReducer from './reducers';
import thunk from 'redux-thunk';

const STORE = createStore(compareReducer, applyMiddleware(thunk));

export default STORE;
