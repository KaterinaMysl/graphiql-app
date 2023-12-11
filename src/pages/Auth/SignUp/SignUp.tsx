import { FormEvent, useState } from 'react';
import { registerWithEmailAndPassword } from '../../../services/firebase';
import styles from './SignUp.module.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
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
      <input type="password" placeholder="Confirm password" />
      <div className={styles.buttons__container}>
        <button
          type="reset"
          onClick={handleReset}
          className={styles.reset__btn}
        >
          Reset
        </button>
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
};

export default SignUp;
