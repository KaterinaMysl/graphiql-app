import { expect, describe, test } from 'vitest';
import { mockApiUrl, mockArrQuery } from '../Mocks';
import { editorError } from '../../validation/constants';
import { validateQuery, validateQueryParam } from '../../validation/editor';

type QueryParams = {
  [key in keyof typeof editorError]: string;
};

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

  describe('validateQuery: when all parameters are valid', () => {
    test('it should not throw an error', () => {
      const mockQueryParams: QueryParams = {
        query: mockArrQuery,
        endpoint: mockApiUrl,
      };
      expect(() => validateQuery(mockQueryParams)).not.toThrow();
    });
  });
});
