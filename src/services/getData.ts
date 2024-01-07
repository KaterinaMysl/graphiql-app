export const getData = async (
  query: string,
  endpoint: string,
  variables: string = '',
  headers: string = ''
) => {
  const currVariables = variables !== '' ? JSON.parse(variables) : {};
  const currHeaders = headers !== '' ? JSON.parse(headers) : {};
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: currVariables,
      headers: currHeaders,
    }),
  });

  if (!response.ok) {
    throw new Error(`Network error ${response.statusText}`);
  }

  const result = await response.json();
  return result;
};
