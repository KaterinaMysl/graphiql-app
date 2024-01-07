import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithProviders from '../renderTest';
import ErrorPage from '../../pages/ErrorPage';
import { ErrorPageMessage } from '../../utils/constants';

describe('ErrorPage component', () => {
  test('should error message', () => {
    renderWithProviders(<ErrorPage />);
    expect(screen.getByText(ErrorPageMessage)).toBeInTheDocument();
  });
});
