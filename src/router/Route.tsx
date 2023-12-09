import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import ErrorPage from '../pages/ErrorPage';
import WelcomePage from '../pages/Welcome/WelcomePage';
import Page404 from '../pages/Page404';
import GraphQl from '../pages/GraphQlPage';
import AuthPage from '../pages/Auth/AuthPage';

import PrivateRoute from './PrivateRoute';
import { ROUTE_PATH } from '../utils/constants';
import SignIn from '../pages/Auth/SignIn/SignIn';
import SignUp from '../pages/Auth/SignUp/SignUp';
import ResetPage from '../pages/Auth/Reset/Reset';

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path={ROUTE_PATH.welcome} element={<WelcomePage />} />
      <Route element={<PrivateRoute allowUnauthorizedAccess={true} />}>
        <Route path={ROUTE_PATH.graphQl} element={<GraphQl />} />
      </Route>
      <Route element={<PrivateRoute allowUnauthorizedAccess={false} />}>
        <Route path={ROUTE_PATH.auth} element={<AuthPage />}>
          <Route path={ROUTE_PATH.login} element={<SignIn />} />
          <Route path={ROUTE_PATH.registration} element={<SignUp />} />
          <Route path={ROUTE_PATH.reset} element={<ResetPage />} />
        </Route>
      </Route>
      <Route path={ROUTE_PATH.page404} element={<Page404 />} />
    </Route>
  )
);
