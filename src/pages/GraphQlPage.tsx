import { useState } from 'react';
import GraphQLEditor from '../components/GraphQLEditor/GraphQLEditor';
import { Schema } from '../utils/types';
import { getSchema } from '../services/getSchema';

import styles from './GraphQlPage.module.css';
const initialApi = 'https://rickandmortyapi.com/graphql';

const GraphQlPage = () => {
  const [inputValue, setInputValue] = useState(initialApi);
  const [schema, setSchema] = useState([] as Schema[]);

  const handlerClick = () => {
    const f = async () => {
      const currSchema = await getSchema(inputValue);
      setSchema(currSchema);
    };
    f();
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
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handlerClick}>change api</button>
        </div>
        <GraphQLEditor endpoint={inputValue} schema={schema} />
      </div>
    </>
  );
};

export default GraphQlPage;
