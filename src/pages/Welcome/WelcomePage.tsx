import RSS from './RSS';
import Header from '../../components/Header/Header';

import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';
import { setToken } from '../../redux/slices/isTokenSlice';

const WelcomePage = () => {
  const dispatch = useAppDispatch();
  const { isToken } = useAppSelector((state: RootState) => state.isTokenSlice);

  const handlerClick = () => {
    dispatch(setToken(!isToken));
  };
  return (
    <div>
      <Header />
      <main>
        <p>Main</p>
        <button onClick={handlerClick}>change isToken</button>
        <p>IsToken: {isToken ? 'true' : 'false'}</p>
        <RSS />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default WelcomePage;
