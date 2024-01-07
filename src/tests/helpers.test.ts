import { expect, describe, test } from 'vitest';
import {
  calculatePasswordStrength,
  checkPasswordStrength,
  convertUnicodeToChar,
  countMatchedStrengthRequirements,
  getCharacterValidationError,
  isStringMatchPattern,
  isTokenNotExpired,
  isTokenValid,
} from '../utils/helpers';
import {
  fakeAccessToken,
  fakeTokenExpiredTime,
  mockPasswords,
  mockPaswordMatchedRequirements,
  tokenNotExpiredTime,
  validatePatternInfoMocks,
} from './Mocks';
import {
  characterTypeName,
  characterValidationErrorParts,
  maxPasswordStrength,
  translatedCharacterTypeName,
} from '../validation/constants';
import { Lang, Strength } from '../utils/types';

const checkAllMatchedRequirementsNumber = (count: number) => {
  test(`should return ${count} if password match ${count} strength requirement`, () => {
    const passwordStrength = countMatchedStrengthRequirements(
      mockPaswordMatchedRequirements[count - 1]
    );
    expect(passwordStrength).toBe(count);
  });
};

const isValidateByPattern = (
  name: string,
  validString: string,
  pattern: RegExp
) => {
  test(`should return true if string contaions ${name}`, () => {
    const isMatch = isStringMatchPattern(validString, pattern);
    expect(isMatch).toBeTruthy();
  });
};

const isNotValidateByPattern = (
  name: string,
  notValidString: string,
  pattern: RegExp
) => {
  test(`should return false if string does not contain ${name}`, () => {
    const isMatch = isStringMatchPattern(notValidString, pattern);
    expect(isMatch).toBeFalsy();
  });
};

const checkValidationByPattern = (
  name: string,
  validString: string,
  notValidString: string,
  pattern: RegExp
) => {
  describe(`${name} pattern`, () => {
    isValidateByPattern(name, validString, pattern);
    isNotValidateByPattern(name, notValidString, pattern);
  });
};

describe('Helpers functions', () => {
  describe('Token functions', () => {
    test('isTokenNotExpired should return false if token expired', () => {
      const isNotExpired = isTokenNotExpired(fakeTokenExpiredTime);
      expect(isNotExpired).toBeFalsy();
    });

    test('isTokenNotExpired should return true if token not expired', () => {
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

  describe('Password strength functions', () => {
    describe('validate string by pattern', () => {
      Object.entries(validatePatternInfoMocks).map(([key, value]) => {
        checkValidationByPattern(
          key,
          value.validString,
          value.notValidString,
          value.pattern
        );
      });
    });
    describe('checkPasswordStrength', () => {
      test('should return "poor" password strength', () => {
        const passwordStrength = checkPasswordStrength(mockPasswords.poor);
        expect(passwordStrength).toBe(Strength.poor);
      });

      test('should return "medium" password strength', () => {
        const passwordStrength = checkPasswordStrength(mockPasswords.medium);
        expect(passwordStrength).toBe(Strength.medium);
      });

      test('should return "strong" password strength', () => {
        const passwordStrength = checkPasswordStrength(mockPasswords.strong);
        expect(passwordStrength).toBe(Strength.strong);
      });
    });
    describe('calculatePasswordStrength', () => {
      test('should return "poor" if less than half of all password requirements are satisfied', () => {
        const halfAllRequirementsNumber = Math.floor(maxPasswordStrength / 2);
        const passwordStrength = calculatePasswordStrength(
          halfAllRequirementsNumber
        );
        expect(passwordStrength).toBe(Strength.poor);
      });

      test('should return "medium" if more than half of all password requirements are satisfied', () => {
        const minMediumRequirementsNumber = Math.ceil(maxPasswordStrength / 2);
        const passwordStrength = calculatePasswordStrength(
          minMediumRequirementsNumber
        );
        expect(passwordStrength).toBe(Strength.medium);

        const mediumRequirementsNumber = minMediumRequirementsNumber + 1;

        if (mediumRequirementsNumber < maxPasswordStrength) {
          const anotherPasswordStrength = calculatePasswordStrength(
            mediumRequirementsNumber
          );
          expect(anotherPasswordStrength).toBe(Strength.medium);
        }
      });

      test('should return "strong" if all password requirements are satisfied', () => {
        const passwordStrength = calculatePasswordStrength(maxPasswordStrength);
        expect(passwordStrength).toBe(Strength.strong);
      });
    });

    describe('countMatchedStrengthRequirements', () => {
      for (let ind = 1; ind < maxPasswordStrength; ind += 1) {
        checkAllMatchedRequirementsNumber(ind);
      }
    });
  });

  const checkValidationErrorByTypeLang = (
    type: keyof typeof characterTypeName,
    lang: Lang
  ) => {
    test(`should return validation ${lang} error message about ${type}`, () => {
      const typeName = translatedCharacterTypeName[lang][type];
      const error = getCharacterValidationError(type, lang);
      const expectErrorText = `${characterValidationErrorParts[lang][0]}${typeName}${characterValidationErrorParts[lang][1]}`;
      expect(error).toBe(expectErrorText);
    });
  };

  describe('Form schema', () => {
    Object.keys(characterTypeName).map((key) => {
      const keyType = key as keyof typeof characterTypeName;
      checkValidationErrorByTypeLang(keyType, 'ru');
      checkValidationErrorByTypeLang(keyType, 'en');
    });
  });

  describe('others', () => {
    test('should return symbol from Unicode string', () => {
      const unicodeString = '0024';
      const expectedSymbol = '$';
      const symbol = convertUnicodeToChar(unicodeString);

      expect(symbol).toBe(expectedSymbol);
    });
  });
});
