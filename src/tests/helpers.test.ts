import { expect, describe, test } from 'vitest';
import { isTokenNotExpired, isTokenValid } from '../utils/helpers';
import { fakeAccessToken, fakeTokenExpiredTime } from './Mocks';

describe('Helpers functions', () => {
  test('isTokenNotExpired should return false if token expired', () => {
    const isNotExpired = isTokenNotExpired(fakeTokenExpiredTime);
    expect(isNotExpired).toBeFalsy();
  });

  test('isTokenNotExpired should return true if token not expired', () => {
    const tokenNotExpiredTime = new Date(Date.now() + 60 * 60);
    const isNotExpired = isTokenNotExpired(tokenNotExpiredTime.toString());
    expect(isNotExpired).toBeTruthy();
  });

  test('should return true if token valid', () => {
    expect(isTokenValid(fakeAccessToken)).toBeTruthy();
  });

  test('should return false if token does not valid', () => {
    const token = '';

    expect(isTokenValid(token)).toBeFalsy();
  });
});
