import { expect, describe, test } from 'vitest';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import useToken from '../../hooks/useToken';
import {
  fakeExpiredToken,
  fakeNotExpiredToken,
  fakeUnvalidToken,
} from '../Mocks';
import { PropsWithChildren } from 'react';
import { setupStore } from '../../redux/store';
import { setToken } from '../../redux/slices/tokenSlice';

const store = setupStore();

const wrapper = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

describe('useToken', () => {
  test('should initially return false', () => {
    const { result } = renderHook(() => useToken(), { wrapper });

    expect(result.current).toBeFalsy();
  });

  test('should return true, when Token is valid and unexpired', () => {
    store.dispatch(setToken(fakeNotExpiredToken));

    const { result } = renderHook(() => useToken(), { wrapper });

    expect(result.current).toBeTruthy();
  });

  test('should return false, when Token is expired', () => {
    store.dispatch(setToken(fakeExpiredToken));

    const { result } = renderHook(() => useToken(), { wrapper });

    expect(result.current).toBeFalsy();
  });

  test('should return false, when Token is not valid', () => {
    store.dispatch(setToken(fakeUnvalidToken));

    const { result } = renderHook(() => useToken(), { wrapper });

    expect(result.current).toBeFalsy();
  });
});
