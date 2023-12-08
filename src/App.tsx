import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { setupStore } from './redux/store';
import { route } from './router/Route';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import './App.css';

const store = setupStore();

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
