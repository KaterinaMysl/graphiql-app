import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import renderWithProviders from '../renderTest';
import Reset from '../../pages/Auth/Reset/Reset';

describe('Reset component', () => {
  test('should contain buttons', () => {
    renderWithProviders(<Reset />);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    expect(buttons[0].innerHTML).toBe('Cancel');
    expect(buttons[1].innerHTML).toBe('Reset');
  });

  test('should change email on typing', async () => {
    const mockEmail = 'some@email.com';
    renderWithProviders(<Reset />);

    const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;

    const user = userEvent.setup();
    await waitFor(() => user.type(emailInput, mockEmail));

    const newEmailInput = (await screen.findByRole(
      'textbox'
    )) as HTMLInputElement;
    expect(newEmailInput).toHaveValue(mockEmail);
  });
});
