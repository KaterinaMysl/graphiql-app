import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithProviders from '../renderTest';
import Page404 from '../../pages/Page404';
import { translations } from '../../utils/constants';

describe('Page404 component', () => {
  const translatedConstants = translations['en'];

  test('should contain 404 title', () => {
    renderWithProviders(<Page404 />);
    expect(
      screen.getByText(translatedConstants.P404.title)
    ).toBeInTheDocument();
  });

  test('should contain description', () => {
    renderWithProviders(<Page404 />);
    expect(screen.getByText(translatedConstants.P404.text)).toBeInTheDocument();
  });

  test('should contain link to main page', () => {
    renderWithProviders(<Page404 />);
    const el = screen.getByText(translatedConstants.P404.link);
    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe('A');
  });
});
