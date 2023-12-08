import './App.css';
import { setupStore } from './redux/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { route } from './router/Route';

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  );
};

export default App;
