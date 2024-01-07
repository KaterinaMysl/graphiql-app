import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithProviders from '../renderTest';
import { MainLayout } from '../../Layouts/Main/Main';

describe('Main component', () => {
  test('should contain header', () => {
    renderWithProviders(<MainLayout />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('should contain main', () => {
    renderWithProviders(<MainLayout />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('should contain footer', () => {
    renderWithProviders(<MainLayout />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
