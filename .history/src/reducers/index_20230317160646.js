import { combineReducers } from 'redux';

import { articleReducer } from '@/pages/article/reducer';

import { tOneDataReducer } from './test-one-reducer';

export default combineReducers({
  tOneDataReducer,
  articleReducer,
});
