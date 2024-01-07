import { Outlet, Navigate } from 'react-router-dom';
import { ROUTE_PATH } from '../utils/constants';
import useToken from '../hooks/useToken';

type PropsPrivateRoute = {
  allowUnauthorizedAccess: boolean;
};

const PrivateRoute = ({ allowUnauthorizedAccess }: PropsPrivateRoute) => {
  const isToken = useToken(true);

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
