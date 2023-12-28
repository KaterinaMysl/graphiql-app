import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import {
  sigInWithEmailAndPassword,
  signInWithGoogle,
} from '../../../services/firebase';
import { LINK_NAME, ROUTE_PATH } from '../../../utils/constants';

import styles from './SignIn.module.css';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import { SubmitHandler, useForm } from 'react-hook-form';

interface SignInForm {
  email: string;
  password: string;
}

const initialFormValues: SignInForm = { email: '', password: '' };

const SignIn = () => {
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
      <input type="text" {...register('email')} placeholder="Email" />
      <PasswordInput control={control} name="password" placeholder="Password" />
      <button type="submit" disabled={isValid ? false : true}>
        Sign In
      </button>
      <button className={styles.google__btn} onClick={handleSignInWithGoogle}>
        Sign In with Google
      </button>
      <div>
        <Link to={`${ROUTE_PATH.auth}/${ROUTE_PATH.reset}`}>
          Forgot Password
        </Link>
      </div>
      <div>
        Do not have an account?
        <Link to={`${ROUTE_PATH.auth}/${ROUTE_PATH.registration}`}>
          {LINK_NAME.registration}
        </Link>
        now.
      </div>
    </form>
  );
};

export default SignIn;
