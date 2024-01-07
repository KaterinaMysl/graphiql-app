import { describe, test, expect, vi, afterAll } from 'vitest';
import { getData } from '../../services/getData';
import {
  mockApiArrResults,
  mockApiArrResultsByVariables,
  mockApiUrl,
  mockArrQuery,
  mockArrQueryWithVariables,
  mockHeaders,
  mockVariables,
} from '../Mocks';

describe('Data from API', () => {
  test('should return Api results without variables', async () => {
    const data = await getData(mockArrQuery, mockApiUrl);
    expect(data).toEqual(mockApiArrResults);
  });

  test('should return Api results with variables', async () => {
    const data = await getData(
      mockArrQueryWithVariables,
      mockApiUrl,
      mockVariables
    );
    expect(data).toEqual(mockApiArrResultsByVariables);
  });

  test('should return Api results with headers', async () => {
    const data = await getData(mockArrQuery, mockApiUrl, '', mockHeaders);
    expect(data).toEqual(mockApiArrResults);
  });

  describe('Mock fetch', () => {
    const fetchSpy = vi.spyOn(global, 'fetch');

    test('should return array', async () => {
      const expectedResult = { data: 'data' };

      const mockResolveValue = {
        ok: true,
        json: () => new Promise((resolve) => resolve(expectedResult)),
      } as Response;

      fetchSpy.mockReturnValue(
        new Promise((resolve) => resolve(mockResolveValue))
      );

      const result = await getData(mockArrQuery, mockApiUrl);
      expect(result).toEqual(expectedResult);
    });

    test('should throw error message if result return error', async () => {
      const mockError = 'response Error';
      const expectedError = new Error('Network error response Error');

      const mockResolveValue = {
        ok: false,
        statusText: mockError,
        json: () => new Promise((_, reject) => reject()),
      } as Response;

      fetchSpy.mockReturnValue(
        new Promise((resolve) => resolve(mockResolveValue))
      );

      try {
        await getData(mockArrQuery, mockApiUrl);
      } catch (e) {
        expect(e).toEqual(expectedError);
      }
    });

    afterAll(() => {
      fetchSpy.mockRestore();
    });
  });
});
