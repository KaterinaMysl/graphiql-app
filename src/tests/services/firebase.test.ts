import { expect, describe, test } from 'vitest';
import {
  logout,
  registerWithEmailAndPassword,
  sendPasswordReset,
  sigInWithEmailAndPassword,
} from '../../services/firebase';
import { deleteUser, getAuth } from 'firebase/auth';
import {
  resetFirebaseErrors,
  signInFirebaseErrors,
  signUpFirebaseErrors,
} from '../../utils/constants';

const mockUser = {
  login: 'admin@admin.com',
  password: '123qweASD!',
};

const newMockUser = {
  name: 'New',
  login: 'new@admin.com',
  password: '123qweASD!',
};

describe('Firebase authorization', () => {
  test('should sigin with right auth data', async () => {
    await sigInWithEmailAndPassword(mockUser.login, mockUser.password);
    const auth = getAuth();
    const user = auth.currentUser;

    expect(user).toBeDefined();
  });

  test('should throw error with wrong auth data', async () => {
    const expectedError = signInFirebaseErrors.invalidEmail;
    try {
      await sigInWithEmailAndPassword('', '');
    } catch (err) {
      if (err instanceof Error) {
        expect(err.message).toBe(expectedError);
      }
    }
  });

  test('should register new user with right auth data', async () => {
    await registerWithEmailAndPassword(
      newMockUser.name,
      newMockUser.login,
      newMockUser.password
    );
    const auth = getAuth();
    const user = auth.currentUser;

    expect(user).toBeDefined();

    if (user) {
      await deleteUser(user);
    }
  });

  test('register should throw error with wrong auth data', async () => {
    const expectedError = signUpFirebaseErrors.invalidEmail;
    try {
      await registerWithEmailAndPassword('', '', '');
    } catch (err) {
      if (err instanceof Error) {
        expect(err.message).toBe(expectedError);
      }
    }
  });

  test('reset password should throw error with wrong auth data', async () => {
    const expectedError = resetFirebaseErrors.missingEmail;
    try {
      await sendPasswordReset('');
    } catch (err) {
      if (err instanceof Error) {
        expect(err.message).toBe(expectedError);
      }
    }
  });
  test('reset password should be successfull', async () => {
    const res = await sendPasswordReset(newMockUser.login);
    expect(res).toBe(undefined);
  });

  test('should logout user successfully', async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    expect(user).toBeDefined();
    await logout();
    expect(user).toBeNull();
  });
});
