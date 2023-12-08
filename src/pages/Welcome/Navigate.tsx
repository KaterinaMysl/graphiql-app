import { Link } from 'react-router-dom';

import { useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';
import { ROUTE_PATH, LINK_NAME } from '../../utils/constants';

const Navigate = () => {
  const { isToken } = useAppSelector((state: RootState) => state.isTokenSlice);

  return (
    <nav>
      {isToken ? (
        <Link to={ROUTE_PATH.graphQl}>{LINK_NAME.graphQl}</Link>
      ) : (
        <>
          <Link to={ROUTE_PATH.login}>{LINK_NAME.login}</Link>
          <span>/</span>
          <Link to={ROUTE_PATH.registration}>{LINK_NAME.registration}</Link>
        </>
      )}
    </nav>
  );
};

export default Navigate;
