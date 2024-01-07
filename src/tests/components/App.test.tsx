import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App component', () => {
  test('should contain body', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
