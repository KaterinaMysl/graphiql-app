export const maxPasswordStrength = 5;
export const SpecialSymbolPattern = /[!@#$%^&*(),.?":{}|<>]/;
export const UppercaseLetterPattern = /[A-Z]/;
export const LowercaseLetterPattern = /[a-z]/;
export const NumberPattern = /[0-9]/;
export const MinPasswordLenght = /(.+){8,}/;

export const PasswordStrengthRequirements = [
  SpecialSymbolPattern,
  UppercaseLetterPattern,
  LowercaseLetterPattern,
  NumberPattern,
  MinPasswordLenght,
];

export const emailPattern =
  /^([A-Za-z0-9_.-]+)@([\dA-Za-z.-]+)\.([A-Za-z.]{2,6})$/;

export enum characterTypeName {
  digit = 'digit',
  uppercase = 'uppercase',
  lowercase = 'lowercase',
  special = 'special character',
}
