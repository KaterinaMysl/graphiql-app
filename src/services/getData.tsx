export const getData = async (query: string, endpoint: string) => {
  try {
    console.log('endpoint', endpoint);
    console.log('query', query);
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Network error: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw error;
  }
};
