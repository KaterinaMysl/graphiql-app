import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  isToken: boolean;
};

const initialState: InitialStateType = {
  isToken: false,
};

const isTokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<boolean>) => {
      state.isToken = action.payload;
    },
  },
});

export const { setToken } = isTokenSlice.actions;
export default isTokenSlice.reducer;
