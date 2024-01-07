import { editorError } from './constants';

type queryParam = {
  [key in keyof typeof editorError]: string;
};

export const validateQueryParam = (
  key: keyof typeof editorError,
  value: string
) => {
  if (value === '') {
    throw new Error(editorError[key]);
  }
};

export const validateQuery = (params: queryParam) => {
  const values = Object.values(params);
  const keys = Object.keys(params) as [keyof typeof editorError];

  for (let i = 0; i < keys.length; i++) {
    validateQueryParam(keys[i], values[i]);
  }
};
