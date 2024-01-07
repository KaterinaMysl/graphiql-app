import { expect, describe, test, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithProviders from '../renderTest';
import HeaderEditor from '../../components/HeaderEditor/HeaderEditor';

describe('HeaderEditor component', () => {
  let handleHeaders: (data: string) => void;
  beforeEach(() => {
    handleHeaders = (data: string) => {
      return data;
    };
  });
  test('should contain container', () => {
    renderWithProviders(
      <HeaderEditor headers="" handleHeaders={handleHeaders} />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should contain text', () => {
    const mockHeaders = 'Authorization: bear';
    renderWithProviders(
      <HeaderEditor headers={mockHeaders} handleHeaders={handleHeaders} />
    );

    expect(screen.getByText('Authorization')).toBeInTheDocument();
  });
});
