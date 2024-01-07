import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Header from '../../Layouts/Header/Header';
import { HEADER } from '../../utils/constants';
import renderWithProviders from '../renderTest';

describe('Header component', () => {
  test("should show 'title'", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText(HEADER.title)).toBeInTheDocument();
  });
});
