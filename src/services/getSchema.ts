import { GraphQLObjectType } from 'graphql';
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
  //const schemaSDL = printSchema(schema);

  const val = Object.values(schema.getTypeMap()).map((type) => {
    if (type instanceof GraphQLObjectType && type.name === 'Characters') {
      //const currType = schema.getQueryType()?.getFields().characters;
      //const { results } = type.getFields();
      //const fieldsTypeName = results.type.ofType.name;
      //const fields = results.type.ofType.getFields();
      // console.log('label= ',type.name,' fieldsType=',fieldsTypeName, ' fields=', fields);
      // if oftype lists то
      // console.log('schema12=', currType?.type.getFields().results.type);
    }
    return {
      label: type.name,
      type: 'keyword',
    };
  });

  return val;
};
