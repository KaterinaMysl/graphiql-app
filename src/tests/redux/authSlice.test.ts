import { expect, describe, test } from 'vitest';
import authReducer, {
  setError,
  setToken,
  unsetToken,
} from '../../redux/slices/authSlice';
import { emptyToken } from '../../utils/constants';
import { Auth } from '../../utils/types';
import { fakeExpiredToken } from '../Mocks';

const state: Auth = {
  ...emptyToken,
  error: '',
};

describe('Auth reduce slice', () => {
  test('should handle initial state', () => {
    const initialState: Auth = state;

    const action = { type: 'unknown', payload: emptyToken };
    const expectedState: Auth = initialState;

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  test('should handle setToken', () => {
    const initialState: Auth = state;

    const action = setToken(fakeExpiredToken);
    const expectedState: Auth = { ...state, ...fakeExpiredToken };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  test('should unset Token values', () => {
    const initialState: Auth = { ...state, ...fakeExpiredToken };

    const action = unsetToken();
    const expectedState: Auth = { ...state };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  test('should handle setError', () => {
    const initialState: Auth = state;
    const mockError = 'Firebase: Error (auth/invalid-email).';

    const action = setError(mockError);
    const expectedState: Auth = { ...state, error: mockError };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });
});
