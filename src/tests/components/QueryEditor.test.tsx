import { expect, describe, test, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithProviders from '../renderTest';
import QueryEditor from '../../components/QueryEditor/QueryEditor';
import { Schema } from '../../utils/types';

describe('QueryEditor component', () => {
  let handleQuery: (query: string) => void;
  beforeEach(() => {
    handleQuery = (query: string) => {
      return query;
    };
  });
  test('should contain container', () => {
    const emptySchema = [] as Schema[];
    renderWithProviders(
      <QueryEditor schema={emptySchema} handleQuery={handleQuery} />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
