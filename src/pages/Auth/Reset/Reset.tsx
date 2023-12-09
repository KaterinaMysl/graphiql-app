import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { sendPasswordReset } from '../../../services/firebase';
import { ROUTE_PATH } from '../../../utils/constants';

import styles from './Reset.module.css';

const Reset = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(`${ROUTE_PATH.auth}/${ROUTE_PATH.login}`);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendPasswordReset(email);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <div className={styles.buttons__container}>
        <button className={styles.cancel__btn} onClick={handleCancel}>
          Cancel
        </button>
        <button>Reset</button>
      </div>
    </form>
  );
};

export default Reset;
