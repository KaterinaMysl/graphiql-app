import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocalization } from '../../../localization/LocalizationContext';
import { registerWithEmailAndPassword } from '../../../services/firebase';
import { translations } from '../../../utils/constants';
import {
  checkPasswordStrength,
  getCharacterValidationError,
  getErrorByPath,
} from '../../../utils/helpers';
import { Strength } from '../../../utils/types';
import { AuthInfo, authInfoSchema } from '../../../validation/form.schema';
import {
  translatedValidations,
  characterTypeName,
} from '../../../validation/constants';

import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { RootState } from '../../../redux/store';
import { setError } from '../../../redux/slices/authSlice';

import PasswordInput from '../../../components/PasswordInput/PasswordInput';

import styles from './SignUp.module.css';

const initialAuthInfo: AuthInfo = {
  name: '',
  password: '',
  confirmPassword: '',
  email: '',
};

const SignUp = () => {
  const { error: signUpError } = useAppSelector(
    (state: RootState) => state.authSlice
  );
  const dispatch = useAppDispatch();

  const { lang } = useLocalization();
  const translatedConstants = translations[lang];
  const validationConstants = translatedValidations[lang];

  const [passwordStrength, setPasswordStrength] = useState(Strength.poor);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors, isValid, dirtyFields },
  } = useForm<AuthInfo>({
    defaultValues: initialAuthInfo,
    resolver: yupResolver(authInfoSchema),
    mode: 'onChange',
  });

  const currPassword = watch('password');

  useEffect(() => {
    const currPasswordStrength = checkPasswordStrength(currPassword);
    setPasswordStrength(currPasswordStrength);
  }, [currPassword]);

  const handleReset = () => reset();

  const onSubmitHandler: SubmitHandler<AuthInfo> = async ({
    name,
    email,
    password,
  }: AuthInfo) => {
    try {
      await registerWithEmailAndPassword(name, email, password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch(setError(err.message));
      }
    }
  };

  const showError = useCallback(
    (messagePath: string) => getErrorByPath(messagePath, validationConstants),
    [validationConstants]
  );

  const showPasswordError = useCallback(
    (messagePath: string) => {
      const pathArr = messagePath.split('.');

      if (pathArr.length === 1) {
        const characterype = messagePath as keyof typeof characterTypeName;
        return getCharacterValidationError(characterype, lang);
      }

      return showError(messagePath);
    },
    [lang, showError]
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        type="text"
        {...register('name')}
        placeholder={translatedConstants.SIGN_UP.enter}
      />
      <p>{errors.name?.message && showError(errors.name.message)}</p>
      <input
        type="text"
        {...register('email')}
        placeholder={translatedConstants.SIGN_UP.email}
      />
      <p>{errors.email?.message && showError(errors.email.message)}</p>
      <PasswordInput<AuthInfo>
        control={control}
        name="password"
        placeholder={translatedConstants.SIGN_UP.password}
      />
      <p
        className={passwordStrength === 'strong' ? styles.strong : styles.poor}
      >
        {dirtyFields.password && (
          <span>
            {translatedConstants.SIGN_UP.strength}{' '}
            <strong>
              {validationConstants.passwordStrength[passwordStrength]}
            </strong>
          </span>
        )}
      </p>
      <p>
        {errors.password?.message && showPasswordError(errors.password.message)}
      </p>
      <PasswordInput<AuthInfo>
        control={control}
        name="confirmPassword"
        placeholder={translatedConstants.SIGN_UP.confirm}
      />
      <p>
        {errors.confirmPassword?.message &&
          showError(errors.confirmPassword.message)}
      </p>
      <div className={styles.buttons__container}>
        <button
          type="reset"
          className={styles.reset__btn}
          onClick={handleReset}
        >
          {translatedConstants.SIGN_UP.reset}
        </button>
        <button type="submit" disabled={isValid ? false : true}>
          {translatedConstants.SIGN_UP.signUP}
        </button>
      </div>
      <p>{translatedConstants.SIGN_UP.firebaseErrors[signUpError]}</p>
    </form>
  );
};

export default SignUp;
