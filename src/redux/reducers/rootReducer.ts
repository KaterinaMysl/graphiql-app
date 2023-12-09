import { combineReducers } from '@reduxjs/toolkit';

import tokenSlice from '../slices/tokenSlice';

export const rootReducer = combineReducers({
  tokenSlice,
});
