import { expect, describe, test, vi } from 'vitest';
import { mockApiUrl, mockArrQuery } from '../Mocks';
import { editorError } from '../../validation/constants';
import { validateQuery, validateQueryParam } from '../../validation/editor';

describe('Editor validation functions', () => {
  describe('validateQueryParam: if query', () => {
    test('is not valid, it should thrown error', () => {
      const expectedError = new Error(editorError.query);
      try {
        validateQueryParam('query', '');
      } catch (err) {
        expect(err).toEqual(expectedError);
      }
    });

    test('is valid, it should return undefined', () => {
      const validateResult = validateQueryParam('query', mockArrQuery);
      expect(validateResult).toBe(undefined);
    });
  });

  describe('validateQueryParam: if endpoint', () => {
    test('is not valid, it should thrown error', () => {
      const expectedError = new Error(editorError.endpoint);
      try {
        validateQueryParam('endpoint', '');
      } catch (err) {
        expect(err).toEqual(expectedError);
      }
    });

    test('is valid, it should return undefined', () => {
      const validateResult = validateQueryParam('endpoint', mockApiUrl);
      expect(validateResult).toBe(undefined);
    });
  });

  describe('validateQuery', () => {
    test.skip('should call validateQueryParam function for all item', () => {
      const mockQueryParams = { endpoint: mockApiUrl, query: mockArrQuery };

      const main = { validateQueryParam, validateQuery };
      const validateQuerySpy = vi.spyOn(main, 'validateQueryParam');

      main.validateQuery(mockQueryParams);
      expect(validateQuerySpy).toHaveBeenCalled();
    });
  });
});
