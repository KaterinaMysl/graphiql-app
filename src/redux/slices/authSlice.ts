import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { emptyToken } from '../../utils/constants';
import { Auth, Token } from '../../utils/types';

const initialState: Auth = {
  ...emptyToken,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
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
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, unsetToken, setError } = authSlice.actions;
export default authSlice.reducer;
