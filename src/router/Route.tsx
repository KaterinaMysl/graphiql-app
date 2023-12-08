import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import WelcomePage from '../pages/Welcome/WelcomePage';
import LoginPage from '../pages/LoginPage';
import Page404 from '../pages/Page404';
import GraphQl from '../pages/GraphQlPage';
import PrivateRoute from './PrivateRoute';
import { ROUTE_PATH } from '../utils/constants';

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path={ROUTE_PATH.welcome} element={<WelcomePage />} />
      <Route element={<PrivateRoute allowUnauthorizedAccess={true} />}>
        <Route path={ROUTE_PATH.graphQl} element={<GraphQl />} />
      </Route>
      <Route element={<PrivateRoute allowUnauthorizedAccess={false} />}>
        <Route path={ROUTE_PATH.login} element={<LoginPage />} />
      </Route>
      <Route path={ROUTE_PATH.page404} element={<Page404 />} />
    </Route>
  )
);
