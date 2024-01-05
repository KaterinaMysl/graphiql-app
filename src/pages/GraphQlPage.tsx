import { ChangeEvent, useState } from 'react';
import GraphQLEditor from '../components/GraphQLEditor/GraphQLEditor';
import { Schema } from '../utils/types';
import { getSchema } from '../services/getSchema';

import styles from './GraphQlPage.module.css';
const initialApi = 'https://rickandmortyapi.com/graphql';

const GraphQlPage = () => {
  const [inputValue, setInputValue] = useState(initialApi);
  const [schema, setSchema] = useState([] as Schema[]);
  const [error, setError] = useState('');

  const handleUrlChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    setInputValue(input.value);
    setError('');
  };

  const handleChangeApi = async () => {
    try {
      const currSchema = await getSchema(inputValue);
      setSchema(currSchema);
    } catch (error) {
      if (error && error instanceof Error) {
        setError('Something wrong with the Api url or schema');
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>GraphiQL Page</h1>
        <p className={styles.description}>
          Welcome to the GraphiQL page! This is where you can interact with your
          GraphQL API.
        </p>
        <div>
          <input type="text" value={inputValue} onChange={handleUrlChange} />
          <button onClick={handleChangeApi}>change api</button>
        </div>
        <div className={styles.error}>{error != '' && error}</div>
        <GraphQLEditor endpoint={inputValue} schema={schema} />
      </div>
    </>
  );
};

export default GraphQlPage;
