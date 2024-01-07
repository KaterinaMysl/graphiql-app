import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithProviders from '../renderTest';
import Footer from '../../Layouts/Footer/Footer';
import { footerAltTexts } from '../../utils/constants';

describe('Footer component', () => {
  test('should show rss logo', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByAltText(footerAltTexts.rss)).toBeInTheDocument();
  });

  test('should show github logo', () => {
    renderWithProviders(<Footer />);
    const githubImages = screen.getAllByAltText(footerAltTexts.github);
    expect(githubImages[0]).toBeInTheDocument();
    expect(githubImages.length).toBe(3);
  });
});
