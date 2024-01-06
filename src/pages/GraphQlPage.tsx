import { ChangeEvent, useState } from 'react';
import GraphQLEditor from '../components/GraphQLEditor/GraphQLEditor';
import { Schema } from '../utils/types';
import { initialApi, translations } from '../utils/constants';
import { getSchema } from '../services/getSchema';
import { useLocalization } from '../localization/LocalizationContext';

import styles from './GraphQlPage.module.css';

const GraphQlPage = () => {
  const [inputValue, setInputValue] = useState(initialApi);
  const [schema, setSchema] = useState([] as Schema[]);
  const [error, setError] = useState('');
  const { lang } = useLocalization();
  const { GraphQlPage } = translations[lang];

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
        setError(GraphQlPage.apiError);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{GraphQlPage.title}</h1>
        <p className={styles.description}>{GraphQlPage.text}</p>
        <div className={styles.apiUrlContainer}>
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
