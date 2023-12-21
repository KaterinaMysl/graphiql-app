import { useState } from 'react';
import { getSchema } from '../services/getShema';
import { Schema } from '../utils/types';
import MyGraphQLEditor from '../components/ErrorBoundary/MyGraphQLIDE/MyGraphQLIDE';

const GraphQlPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [schema, setSchema] = useState([] as Schema[]);

  const handlerClick = () => {
    const f = async () => {
      const currSchema = await getSchema(inputValue);
      setSchema(currSchema);
      console.log('set schema');
    };
    f();

    console.log('endpoint', inputValue);
  };

  return (
    <>
      <div>GraphiQl Page</div>;
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handlerClick}>change api</button>
      </div>
      <MyGraphQLEditor endpoint={inputValue} schema={schema} />
    </>
  );
};

export default GraphQlPage;
