import { useNavigate } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { sendPasswordReset } from '../../../services/firebase';
import { ROUTE_PATH, translations } from '../../../utils/constants';
import { Email, emailSchema } from '../../../validation/form.schema';
import { useLocalization } from '../../../localization/LocalizationContext';

import { useCallback } from 'react';
import { getErrorByPath } from '../../../utils/helpers';
import { translatedValidations } from '../../../validation/constants';

import { setError } from '../../../redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { RootState } from '../../../redux/store';

import styles from './Reset.module.css';

const Reset = () => {
  const { error } = useAppSelector((state: RootState) => state.authSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { lang } = useLocalization();
  const translatedConstants = translations[lang];
  const validationConstants = translatedValidations[lang];

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

  const onSubmitHandler: SubmitHandler<Email> = async ({ email }: Email) => {
    try {
      await sendPasswordReset(email);
      navigate(ROUTE_PATH.welcome);
    } catch (err) {
      if (err instanceof Error) {
        dispatch(setError(err.message));
      }
    }
  };

  const showError = useCallback(
    (messagePath: string) => getErrorByPath(messagePath, validationConstants),
    [validationConstants]
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        type="text"
        {...register('email')}
        placeholder={translatedConstants.RESET.email}
      />
      <p>{errors.email?.message && showError(errors.email.message)}</p>
      <div className={styles.buttons__container}>
        <button className={styles.cancel__btn} onClick={handleCancel}>
          {translatedConstants.RESET.cancel}
        </button>
        <button disabled={isValid ? false : true}>
          {translatedConstants.RESET.reset}
        </button>
      </div>
      <p>{translatedConstants.RESET.firebaseErrors[error]}</p>
    </form>
  );
};

export default Reset;
