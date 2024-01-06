import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocalization } from '../../../localization/LocalizationContext';
import { registerWithEmailAndPassword } from '../../../services/firebase';
import { translations } from '../../../utils/constants';
import { checkPasswordStrength } from '../../../utils/helpers';
import { Strength } from '../../../utils/types';
import { AuthInfo, authInfoSchema } from '../../../validation/form.schema';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';

import styles from './SignUp.module.css';
import { translatedValidations } from '../../../validation/constants';

const initialAuthInfo: AuthInfo = {
  name: '',
  password: '',
  confirmPassword: '',
  email: '',
};

const SignUp = () => {
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
    formState: { errors, isValid },
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

  const onSubmitHandler: SubmitHandler<AuthInfo> = ({
    name,
    email,
    password,
  }: AuthInfo) => {
    registerWithEmailAndPassword(name, email, password);
  };

  const showError = useCallback(
    (messagePath: string) => {
      return messagePath
        .split('.')
        .reduce(
          (curr, pathPart: string) => curr[pathPart],
          validationConstants
        );
    },
    [validationConstants]
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
      <PasswordInput
        control={control}
        name="password"
        placeholder={translatedConstants.SIGN_UP.password}
      />
      <p className={styles.green}>
        {translatedConstants.SIGN_UP.strength}{' '}
        <strong>
          {validationConstants.passwordStrength[passwordStrength]}
        </strong>
      </p>
      <p>{errors.password?.message && showError(errors.password.message)}</p>
      <PasswordInput
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
    </form>
  );
};

export default SignUp;
