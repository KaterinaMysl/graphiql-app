import { expect, describe, test } from 'vitest';
import { getCharacterValidationError } from '../../validation/form.schema';
import { characterTypeName } from '../../validation/constants';

const errorString = ['Your password must have at least 1', 'character'];

const checkValidationErrorByType = (type: string) => {
  test(`should return validation error message about ${type}`, () => {
    const error = getCharacterValidationError(type);
    const expectErrorText = `${errorString[0]} ${type} ${errorString[1]}`;
    expect(error).toBe(expectErrorText);
  });
};
describe('Form schema', () => {
  Object.keys(characterTypeName).map((key) => {
    checkValidationErrorByType(key);
  });
});
