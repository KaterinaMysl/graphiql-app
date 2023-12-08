import { combineReducers } from '@reduxjs/toolkit';

import isTokenSlice from '../slices/isTokenSlice';

export const rootReducer = combineReducers({
  isTokenSlice,
});
