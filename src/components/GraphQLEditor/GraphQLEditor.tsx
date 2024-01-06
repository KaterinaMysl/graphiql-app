import { useState } from 'react';

import { getData } from '../../services/getData';
import { editorError } from '../../validation/constants';
import { validateQuery } from '../../validation/editor';
import { translations } from '../../utils/constants';
import { Schema } from '../../utils/types';
import { useLocalization } from '../../localization/LocalizationContext';

import QueryEditor from '../QueryEditor/QueryEditor';
import ResultEditor from '../ResultEditor/ResultEditor';
import VariableEditor from '../VariableEditor/VariableEditor';
import HeaderEditor from '../HeaderEditor/HeaderEditor';
import Tabs from '../Tabs/Tabs';

import styles from './GraphQLEditor.module.css';

type Props = {
  endpoint: string;
  schema: Schema[];
};

export default function GraphQLEditor({ endpoint, schema }: Props) {
  const { lang } = useLocalization();
  const { GraphQlEditor } = translations[lang];

  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');
  const [graphqlResult, setGraphqlResult] = useState<string>('');

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
      validateQuery({ query: editorError.query, endpoint: endpoint });
      const response = await getData(query, endpoint, variables, headers);
      if (response && response.data) {
        setGraphqlResult(JSON.stringify(response, null, 2));
      }
    } catch (error) {
      if (error && error instanceof Error) {
        setGraphqlResult(`${GraphQlEditor.queryError}\n${error}`);
      }
    }
  };

  const tabsContent = [
    {
      label: GraphQlEditor.variables,
      content: (
        <VariableEditor
          variables={variables}
          handleVariables={handleVariables}
        />
      ),
    },
    {
      label: GraphQlEditor.headers,
      content: <HeaderEditor headers={headers} handleHeaders={handleHeaders} />,
    },
  ];

  return (
    <>
      <div className={styles.editorsContainer}>
        <div className={styles.queryContainer}>
          <QueryEditor schema={schema} handleQuery={handleQuery} />
          <Tabs tabs={tabsContent} />
        </div>
        <button className={styles.runBtn} onClick={handleSubmit}>
          {GraphQlEditor.run}
        </button>
        <ResultEditor results={graphqlResult} />
      </div>
    </>
  );
}
