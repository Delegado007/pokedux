import { combineReducers } from 'redux';
import dataReducer from './../slices/dataSlice'
import uiReducer from './../slices/uiSlice';
import paginationReducer from '../slices/paginationSlice';
// import searchReducer from './../slices/searchSlice'

export const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
  pagination: paginationReducer,
  // search: searchReducer,
});