import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { setupStore } from './redux/store';
import { setToken } from './redux/slices/authSlice';
import { route } from './router/Route';
import { useLocalStorage } from './hooks/useLocalStorage';
import { TOKEN_TITLE, emptyToken } from './utils/constants';
import { LocalizationProvider } from './localization/LocalizationContext';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './App.css';

const store = setupStore();

const App = () => {
  const [storedValue] = useLocalStorage(TOKEN_TITLE, emptyToken);

  useEffect(() => {
    store.dispatch(setToken(storedValue));
  }, [storedValue]);

  return (
    <ErrorBoundary>
      <LocalizationProvider>
        <Provider store={store}>
          <RouterProvider router={route} />
        </Provider>
      </LocalizationProvider>
    </ErrorBoundary>
  );
};

export default App;
