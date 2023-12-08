import { Outlet, Navigate } from 'react-router-dom';

import { useAppSelector } from '../redux/hook';
import { RootState } from '../redux/store';
import { ROUTE_PATH } from '../utils/constants';

type PropsPrivateRoute = {
  allowUnauthorizedAccess: boolean;
};

const PrivateRoute = ({ allowUnauthorizedAccess }: PropsPrivateRoute) => {
  const { isToken } = useAppSelector((state: RootState) => state.isTokenSlice);

  return (
    <>
      {isToken === allowUnauthorizedAccess ? (
        <Outlet />
      ) : (
        <Navigate to={ROUTE_PATH.welcome} />
      )}
    </>
  );
};

export default PrivateRoute;
