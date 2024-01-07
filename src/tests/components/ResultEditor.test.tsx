import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithProviders from '../renderTest';
import ResultEditor from '../../components/ResultEditor/ResultEditor';
import { mockApiArrResults } from '../Mocks';

describe('ResultEditor component', () => {
  test('should contain container', () => {
    renderWithProviders(<ResultEditor results="" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should contain text', () => {
    renderWithProviders(
      <ResultEditor results={mockApiArrResults.toString()} />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
