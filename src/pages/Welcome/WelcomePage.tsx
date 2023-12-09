import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';
import { setToken } from '../../redux/slices/isTokenSlice';

import { MainLayout } from '../../Layouts/Main/Main';
import RSS from './RSS';

const WelcomePage = () => {
  const dispatch = useAppDispatch();
  const { isToken } = useAppSelector((state: RootState) => state.isTokenSlice);

  const handlerClick = () => {
    dispatch(setToken(!isToken));
  };

  return (
    <MainLayout>
      <p>Welcome</p>
      <button onClick={handlerClick}>change isToken</button>
      <p>IsToken: {isToken ? 'true' : 'false'}</p>
      <RSS />
    </MainLayout>
  );
};

export default WelcomePage;
