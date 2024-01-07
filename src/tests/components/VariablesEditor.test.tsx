import { expect, describe, test, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithProviders from '../renderTest';
import VariableEditor from '../../components/VariableEditor/VariableEditor';

describe('VariableEditor component', () => {
  let handleVariables: (data: string) => void;
  beforeEach(() => {
    handleVariables = (data: string) => {
      return data;
    };
  });
  test('should contain container', () => {
    renderWithProviders(
      <VariableEditor variables="" handleVariables={handleVariables} />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should contain text', () => {
    const mockVariables = '{page:2}';
    renderWithProviders(
      <VariableEditor
        variables={mockVariables}
        handleVariables={handleVariables}
      />
    );

    expect(screen.getByText('page')).toBeInTheDocument();
  });
});
