import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../../../localization/LocalizationContext';

import {
  sigInWithEmailAndPassword,
  signInWithGoogle,
} from '../../../services/firebase';
import { translations, ROUTE_PATH } from '../../../utils/constants';

import styles from './SignIn.module.css';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import { SubmitHandler, useForm } from 'react-hook-form';

interface SignInForm {
  email: string;
  password: string;
}

const initialFormValues: SignInForm = { email: '', password: '' };

const SignIn = () => {
  const { lang } = useLocalization();
  const translatedConstants = translations[lang];
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<SignInForm>({
    defaultValues: initialFormValues,
    mode: 'onChange',
  });

  const onSubmitHandler: SubmitHandler<SignInForm> = ({
    email,
    password,
  }: SignInForm) => {
    sigInWithEmailAndPassword(email, password);
  };

  const handleSignInWithGoogle = (e: FormEvent) => {
    e.preventDefault();
    signInWithGoogle();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        type="text"
        {...register('email')}
        placeholder={translatedConstants.SIGN_IN.email}
      />
      <PasswordInput
        control={control}
        name="password"
        placeholder={translatedConstants.SIGN_IN.password}
      />
      <button type="submit" disabled={isValid ? false : true}>
        {translatedConstants.SIGN_IN.signIn}
      </button>
      <button className={styles.google__btn} onClick={handleSignInWithGoogle}>
        {translatedConstants.SIGN_IN.google}
      </button>
      <div>
        <Link to={`${ROUTE_PATH.auth}/${ROUTE_PATH.reset}`}>
          {translatedConstants.SIGN_IN.forget}
        </Link>
      </div>
      <div>
        {translatedConstants.SIGN_IN.not} <br />
        <Link to={`${ROUTE_PATH.auth}/${ROUTE_PATH.registration}`}>
          {translatedConstants.LINK_NAME.registration}
        </Link>{' '}
        {translatedConstants.SIGN_IN.now}
      </div>
    </form>
  );
};

export default SignIn;
