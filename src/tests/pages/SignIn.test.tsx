import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import renderWithProviders from '../renderTest';
import { translations } from '../../utils/constants';
import SignIn from '../../pages/Auth/SignIn/SignIn';

describe('SignIn component', () => {
  const translatedConstants = translations['en'];
  test('should contain buttons', () => {
    renderWithProviders(<SignIn />);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    expect(buttons[0].innerHTML).toBe(translatedConstants.SIGN_IN.signIn);
    expect(buttons[1].innerHTML).toBe(translatedConstants.SIGN_IN.google);
  });

  test('should contain links', () => {
    renderWithProviders(<SignIn />);

    const buttons = screen.getAllByRole('link');
    expect(buttons.length).toBe(2);
    expect(buttons[0].innerHTML).toBe(translatedConstants.SIGN_IN.forget);
    expect(buttons[1].innerHTML).toBe(
      translatedConstants.LINK_NAME.registration
    );
  });

  test('should change email if user input text', async () => {
    const mockEmail = 'some@email.com';
    renderWithProviders(<SignIn />);
    act(() => {
      const emailInput = screen.getByPlaceholderText(
        'Email'
      ) as HTMLInputElement;

      fireEvent.change(emailInput, { target: { value: mockEmail } });
      expect(emailInput.value).toBe(mockEmail);
    });
  });
});
