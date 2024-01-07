import yup, { string, ref, object } from 'yup';
import {
  LowercaseLetterPattern,
  NumberPattern,
  SpecialSymbolPattern,
  UppercaseLetterPattern,
  characterTypeName,
  emailPattern,
} from './constants';

export const authInfoSchema = object({
  name: string()
    .matches(/^([A-Z]|[А-Я])([a-z]|[а-я])+/, {
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
    .matches(NumberPattern, characterTypeName.digit)
    .matches(UppercaseLetterPattern, characterTypeName.uppercase)
    .matches(LowercaseLetterPattern, characterTypeName.lowercase)
    .matches(SpecialSymbolPattern, characterTypeName.special),
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
