import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
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

  test('should go out from page when click Reset button', async () => {
    const mockEmail = 'some@email.com';
    renderWithProviders(<Reset />);

    const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: mockEmail } });
    expect(emailInput.value).toBe(mockEmail);
  });

  test('should go out from page when click cancel button', () => {
    renderWithProviders(<Reset />);

    act(() => {
      act(async () => {
        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);
        expect(await screen.findByText('Cancel')).not.toBeInTheDocument();
      });
    });
  });
});
