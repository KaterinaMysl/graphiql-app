import { buildClientSchema, getIntrospectionQuery } from 'graphql/utilities';
import { Schema } from '../utils/types';

export const getSchema = async (endpoint: string): Promise<Schema[]> => {
  const introspectionQuery = getIntrospectionQuery();
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query: introspectionQuery }),
  });

  const schemaJSON = await response.json();
  const introspectionData = schemaJSON.data;
  const schema = buildClientSchema(introspectionData);

  const val = Object.values(schema.getTypeMap()).map((type) => {
    return {
      label: type.name,
      type: 'keyword',
    };
  });

  return val;
};
