import {
  PasswordStrengthRequirements,
  characterValidationErrorParts,
  maxPasswordStrength,
} from '../validation/constants';
import { Lang, Strength } from './types';

export const isTokenNotExpired = (expirationTime: string): boolean => {
  const time = new Date(expirationTime);
  const now = new Date();
  const is = now < time;

  return is;
};

// TODO:  if token from localstorage how to check validation
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

export const getCharacterValidationError = (type: string, lang: Lang) =>
  `${characterValidationErrorParts[lang][0]}${type}${characterValidationErrorParts[lang][1]}`;
