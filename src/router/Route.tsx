import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import WelcomePage from '../pages/Welcome';
import LoginPage from '../pages/Login';
import MainPage from '../pages/Main';
import Page404 from '../pages/Page404';

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);
