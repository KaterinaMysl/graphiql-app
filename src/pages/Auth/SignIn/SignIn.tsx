import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocalization } from '../../../localization/LocalizationContext';
import {
  sigInWithEmailAndPassword,
  signInWithGoogle,
} from '../../../services/firebase';
import { translations, ROUTE_PATH } from '../../../utils/constants';
import { SignInForm } from '../../../utils/types';

import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { RootState } from '../../../redux/store';
import { setError } from '../../../redux/slices/authSlice';

import PasswordInput from '../../../components/PasswordInput/PasswordInput';

import styles from './SignIn.module.css';

const initialFormValues: SignInForm = { email: '', password: '' };

const SignIn = () => {
  const { error: signInError } = useAppSelector(
    (state: RootState) => state.authSlice
  );
  const dispatch = useAppDispatch();

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

  const onSubmitHandler: SubmitHandler<SignInForm> = async ({
    email,
    password,
  }: SignInForm) => {
    try {
      await sigInWithEmailAndPassword(email, password);
    } catch (err) {
      if (err instanceof Error) {
        dispatch(setError(err.message));
      }
    }
  };

  const handleSignInWithGoogle = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
    } catch (err) {
      if (err instanceof Error) {
        dispatch(setError(err.message));
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        type="text"
        {...register('email')}
        placeholder={translatedConstants.SIGN_IN.email}
      />
      <PasswordInput<SignInForm>
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
      <p>{translatedConstants.SIGN_IN.firebaseErrors[signInError]}</p>
    </form>
  );
};

export default SignIn;
