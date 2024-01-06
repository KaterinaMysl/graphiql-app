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
  special = 'special',
}

export enum editorError {
  query = 'Query does not contain any operations',
  endpoint = 'Endpoint is empty',
}

export const translatedValidationErrorMessages = {
  ru: {
    name: {
      pattern: 'Name must start from the uppercase letter',
      required: 'Please, enter your name',
    },
    email: {
      pattern: 'Please enter a valid email',
      required: 'Email is required',
    },
    password: {
      required: 'Please, enter a password',
    },
    confirmPassword: {
      pattern: "Passwords doesn't match",
      required: 'Please, type your password again',
    },
  },
  en: {
    name: {
      pattern: 'Имя должно начинаться с большой буквы',
      required: 'Пожалуйста, введите имя',
    },
    email: {
      pattern: 'Пожалуйста, введите правильный формат email',
      required: 'Email обязателен для заполнения',
    },
    password: {
      required: 'Пожалуйста, введите пароль',
    },
    confirmPassword: {
      pattern: 'Пароли не совпадают',
      required: 'Пожалуйста, введите пароль еще раз',
    },
  },
};

export const characterValidationErrorParts = {
  en: ['Your password must have at least 1 ', ' character'],
  ru: ['Ваш пароль должен содержать хотя бы 1 ', ' символ'],
};

export const translatedCharacterTypeName = {
  en: {
    digit: 'digit',
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    special: 'special',
  },
  ru: {
    digit: 'цифровой',
    uppercase: 'прописной',
    lowercase: 'строчный',
    special: 'специальный',
  },
};

export const translatedValidations = {
  en: {
    validationErrorMessages: { ...translatedValidationErrorMessages.ru },
    passwordStrength: {
      poor: 'poor',
      medium: 'medium',
      strong: 'strong',
    },
  },
  ru: {
    validationErrorMessages: { ...translatedValidationErrorMessages.en },
    passwordStrength: {
      poor: 'слабая',
      medium: 'средняя',
      strong: 'достаточная',
    },
  },
};
