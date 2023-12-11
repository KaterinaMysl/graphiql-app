import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { emptyToken } from '../../utils/constants';
import { Token } from '../../utils/types';

const initialState: Token = {
  ...emptyToken,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<Token>) => {
      state.accessToken = action.payload.accessToken;
      state.expirationTime = action.payload.expirationTime;
    },
    unsetToken: (state) => {
      state.accessToken = emptyToken.accessToken;
      state.expirationTime = emptyToken.expirationTime;
    },
  },
});

export const { setToken, unsetToken } = tokenSlice.actions;
export default tokenSlice.reducer;
