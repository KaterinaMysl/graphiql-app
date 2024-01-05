import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { registerWithEmailAndPassword } from '../../../services/firebase';

import { checkPasswordStrength } from '../../../utils/helpers';
import { Strength } from '../../../utils/types';
import { AuthInfo, authInfoSchema } from '../../../validation/form.schema';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';

import styles from './SignUp.module.css';

const initialAuthInfo: AuthInfo = {
  name: '',
  password: '',
  confirmPassword: '',
  email: '',
};

const SignUp = () => {
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

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <input type="text" {...register('name')} placeholder="Enter name" />
      <p>{errors.name?.message}</p>
      <input type="text" {...register('email')} placeholder="Email" />
      <p>{errors.email?.message}</p>
      <PasswordInput<AuthInfo>
        control={control}
        name="password"
        placeholder="Password"
      />
      <p className={styles.green}>
        Your password strength is <strong>{passwordStrength}</strong>
      </p>
      <p>{errors.password?.message}</p>
      <PasswordInput<AuthInfo>
        control={control}
        name="confirmPassword"
        placeholder="Confirm password"
      />
      <p>{errors.confirmPassword?.message}</p>
      <div className={styles.buttons__container}>
        <button
          type="reset"
          className={styles.reset__btn}
          onClick={handleReset}
        >
          Reset
        </button>
        <button type="submit" disabled={isValid ? false : true}>
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
