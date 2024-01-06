import { useNavigate } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { sendPasswordReset } from '../../../services/firebase';
import { ROUTE_PATH, translations } from '../../../utils/constants';
import { Email, emailSchema } from '../../../validation/form.schema';
import { useLocalization } from '../../../localization/LocalizationContext';

import styles from './Reset.module.css';

const Reset = () => {
  const navigate = useNavigate();
  const { lang } = useLocalization();
  const translatedConstants = translations[lang];

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
      <input
        type="text"
        {...register('email')}
        placeholder={translatedConstants.RESET.email}
      />
      <p>{errors.email?.message}</p>
      <div className={styles.buttons__container}>
        <button className={styles.cancel__btn} onClick={handleCancel}>
          {translatedConstants.RESET.cancel}
        </button>
        <button disabled={isValid ? false : true}>
          {' '}
          {translatedConstants.RESET.reset}
        </button>
      </div>
    </form>
  );
};

export default Reset;
