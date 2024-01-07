import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import renderWithProviders from '../renderTest';
import { translations } from '../../utils/constants';
import SignUp from '../../pages/Auth/SignUp/SignUp';

describe('SignUp component', () => {
  const translatedConstants = translations['en'];
  test('should contain buttons', () => {
    renderWithProviders(<SignUp />);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    expect(buttons[0].innerHTML).toBe(translatedConstants.SIGN_UP.reset);
    expect(buttons[1].innerHTML).toBe(translatedConstants.SIGN_UP.signUP);
  });

  test('should change email if user input text', async () => {
    const mockEmail = 'some@email.com';
    renderWithProviders(<SignUp />);

    const user = userEvent.setup();
    const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;

    await waitFor(() => user.type(emailInput, mockEmail));

    expect(emailInput.value).toBe(mockEmail);
  });
});
