import { useState } from 'react';
import { getData } from '../../services/getData';
import { Schema } from '../../utils/types';
import QueryEditor from '../QueryEditor/QueryEditor';
import ResultEditor from '../ResultEditor/ResultEditor';
import VariableEditor from '../VariableEditor/VariableEditor';
import HeaderEditor from '../HeaderEditor/HeaderEditor';

import styles from './GraphQLEditor.module.css';

export const apiUrl =
  'https://swapi-graphql.netlify.app/.netlify/functions/index';

type Props = {
  endpoint: string;
  schema: Schema[];
};

export default function GraphQLEditor({ endpoint, schema }: Props) {
  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');
  const [graphqlResult, setGraphqlResult] = useState<string>('');
  const [error, setError] = useState('');

  const handleQuery = (data: string) => {
    setQuery(data);
  };

  const handleVariables = (data: string) => {
    setVariables(data);
  };

  const handleHeaders = (data: string) => {
    setHeaders(data);
  };

  const handleSubmit = async () => {
    try {
      const response = await getData(query, endpoint, variables, headers);
      if (response && response.data) {
        setGraphqlResult(JSON.stringify(response, null, 2));
      }
    } catch (error) {
      if (error && error instanceof Error) {
        setError('Something wrong with the Api data');
      }
    }
  };

  return (
    <>
      <div className={styles.editorsContainer}>
        <div className={styles.queryContainer}>
          <QueryEditor schema={schema} handleQuery={handleQuery} />
          <VariableEditor handleVariables={handleVariables} />
          <HeaderEditor handleHeaders={handleHeaders} />
        </div>
        <button onClick={handleSubmit}>Run</button>
        <ResultEditor results={graphqlResult} />
      </div>
      <div className={styles.error}>{error != '' && error}</div>
    </>
  );
}
