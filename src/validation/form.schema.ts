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
      message: 'validationErrorMessages.name.pattern',
    })
    .required('validationErrorMessages.name.required'),
  email: string()
    .matches(emailPattern, {
      excludeEmptyString: true,
      message: 'validationErrorMessages.email.pattern',
    })
    .required('validationErrorMessages.email.required'),
  password: string()
    .required('validationErrorMessages.password.required')
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
    .required('validationErrorMessages.confirmPassword.required')
    .oneOf(
      [ref('password')],
      'validationErrorMessages.confirmPassword.pattern'
    ),
});

export interface AuthInfo extends yup.InferType<typeof authInfoSchema> {}

export const emailSchema = object({
  email: string()
    .matches(emailPattern, {
      excludeEmptyString: true,
      message: 'validationErrorMessages.email.pattern',
    })
    .required('validationErrorMessages.email.required'),
});

export interface Email extends yup.InferType<typeof emailSchema> {}
