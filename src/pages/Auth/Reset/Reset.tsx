import { useNavigate } from 'react-router';

import { sendPasswordReset } from '../../../services/firebase';
import { ROUTE_PATH } from '../../../utils/constants';

import styles from './Reset.module.css';
import { Email, emailSchema } from '../../../validation/form.schema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Reset = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Email>({
    defaultValues: { email: '' },
    resolver: yupResolver(emailSchema),
    mode: 'onChange',
  });

  const handleCancel = () => {
    navigate(`${ROUTE_PATH.auth}/${ROUTE_PATH.login}`);
  };

  const onSubmitHandler: SubmitHandler<Email> = ({ email }: Email) => {
    sendPasswordReset(email);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <input type="text" {...register('email')} placeholder="Email" />
      <p>{errors.email?.message}</p>
      <div className={styles.buttons__container}>
        <button className={styles.cancel__btn} onClick={handleCancel}>
          Cancel
        </button>
        <button disabled={isValid ? false : true}>Reset</button>
      </div>
    </form>
  );
};

export default Reset;
