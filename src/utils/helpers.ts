import {
  PasswordStrengthRequirements,
  characterTypeName,
  characterValidationErrorParts,
  maxPasswordStrength,
  translatedCharacterTypeName,
} from '../validation/constants';
import { Lang, Strength, ValidationConstants } from './types';

export const isTokenNotExpired = (expirationTime: string): boolean => {
  const time = new Date(expirationTime);
  const now = new Date();
  const is = now < time;

  return is;
};

export const isTokenValid = (token: string): boolean => {
  return token !== '';
};

export const isStringMatchPattern = (str: string, pattern: RegExp) =>
  str.match(pattern);

export const calculatePasswordStrength = (strengthCount: number) => {
  if (strengthCount === maxPasswordStrength) {
    return Strength.strong;
  }
  if (strengthCount > maxPasswordStrength / 2) {
    return Strength.medium;
  }

  return Strength.poor;
};

export const checkPasswordStrength = (password: string) => {
  const strengthCount = countMatchedStrengthRequirements(password);
  const currPasswordStrength = calculatePasswordStrength(strengthCount);
  return currPasswordStrength;
};

export const countMatchedStrengthRequirements = (password: string): number => {
  let strengthCount = 0;

  PasswordStrengthRequirements.forEach((pattern: RegExp) => {
    if (isStringMatchPattern(password, pattern)) {
      strengthCount += 1;
    }
  });
  return strengthCount;
};

export const convertUnicodeToChar = (unicodeStr: string): string => {
  const code = parseInt(unicodeStr, 16);
  return String.fromCharCode(code);
};

export const getCharacterValidationError = (
  type: keyof typeof characterTypeName,
  lang: Lang
) => {
  const typeName = translatedCharacterTypeName[lang][type];
  const firstPart = characterValidationErrorParts[lang][0];
  const lastPart = characterValidationErrorParts[lang][1];

  return `${firstPart}${typeName}${lastPart}`;
};

export const getErrorByPath = (
  messagePath: string,
  validationConstants: ValidationConstants
): string =>
  messagePath
    .split('.')
    .reduce((curr, pathPart) => curr[pathPart], validationConstants)
    .toString();
