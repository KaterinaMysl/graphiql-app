import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  sigInWithEmailAndPassword,
  signInWithGoogle,
} from '../../../services/firebase';
import { LINK_NAME, ROUTE_PATH } from '../../../utils/constants';

import styles from './SignIn.module.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sigInWithEmailAndPassword(email, password);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign In</button>
      <button className={styles.google__btn} onClick={signInWithGoogle}>
        Sign In with Google
      </button>
      <div>
        <Link to={`${ROUTE_PATH.auth}/${ROUTE_PATH.reset}`}>
          Forgot Password
        </Link>
      </div>
      <div>
        Do not have an account?{' '}
        <Link to={`${ROUTE_PATH.auth}/${ROUTE_PATH.registration}`}>
          {LINK_NAME.registration}
        </Link>{' '}
        now.
      </div>
    </form>
  );
};

export default SignIn;
