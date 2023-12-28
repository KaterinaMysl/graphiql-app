import yup, { string, ref, object } from 'yup';
import {
  LowercaseLetterPattern,
  NumberPattern,
  SpecialSymbolPattern,
  UppercaseLetterPattern,
  characterTypeName,
  emailPattern,
} from './constants';

export const getCharacterValidationError = (str: string) =>
  `Your password must have at least 1 ${str} character`;

export const authInfoSchema = object({
  name: string()
    .matches(/^[A-Z][a-z]+/, {
      excludeEmptyString: true,
      message: 'Name must start from the uppercase letter',
    })
    .required('Please, enter your name'),
  email: string()
    .matches(emailPattern, {
      excludeEmptyString: true,
      message: 'Please enter a valid email',
    })
    .required('Email is required'),
  password: string()
    .required('Please, enter a password')
    .matches(
      NumberPattern,
      getCharacterValidationError(characterTypeName.digit)
    )
    .matches(
      UppercaseLetterPattern,
      getCharacterValidationError(characterTypeName.uppercase)
    )
    .matches(
      LowercaseLetterPattern,
      getCharacterValidationError(characterTypeName.lowercase)
    )
    .matches(
      SpecialSymbolPattern,
      getCharacterValidationError(characterTypeName.special)
    ),
  confirmPassword: string()
    .required('Please, type your password again')
    .oneOf([ref('password')], "Passwords doesn't match"),
});

export interface AuthInfo extends yup.InferType<typeof authInfoSchema> {}

export const emailSchema = object({
  email: string()
    .matches(emailPattern, {
      excludeEmptyString: true,
      message: 'Please enter a valid email',
    })
    .required('Email is required'),
});

export interface Email extends yup.InferType<typeof emailSchema> {}
