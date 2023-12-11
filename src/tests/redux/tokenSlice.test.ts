import { expect, describe, test } from 'vitest';
import tokenReducer, {
  setToken,
  unsetToken,
} from '../../redux/slices/tokenSlice';
import { emptyToken } from '../../utils/constants';
import { Token } from '../../utils/types';
import { fakeExpiredToken } from '../Mocks';

const state: Token = {
  accessToken: '',
  expirationTime: '',
};

describe('Token reduce slice', () => {
  test('should handle initial state', () => {
    const initialState: Token = state;

    const action = { type: 'unknown', payload: emptyToken };
    const expectedState = initialState;

    expect(tokenReducer(initialState, action)).toEqual(expectedState);
  });

  test('should handle setToken', () => {
    const initialState: Token = state;

    const action = setToken(fakeExpiredToken);
    const expectedState: Token = { ...state, ...fakeExpiredToken };

    expect(tokenReducer(initialState, action)).toEqual(expectedState);
  });

  test('should unset Token values', () => {
    const initialState: Token = { ...state, ...fakeExpiredToken };

    const action = unsetToken();
    const expectedState: Token = { ...state };

    expect(tokenReducer(initialState, action)).toEqual(expectedState);
  });
});
