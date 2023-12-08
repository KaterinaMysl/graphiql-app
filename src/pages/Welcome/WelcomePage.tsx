import { useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/slices/isTokenSlice';
import Navigate from './Navigate';

const WelcomePage = () => {
  const dispatch = useDispatch();
  const { isToken } = useAppSelector((state: RootState) => state.isTokenSlice);

  const handlerClick = () => {
    dispatch(setToken(!isToken));
  };
  return (
    <>
      <header>
        <p>header</p>
        <Navigate />
      </header>
      <main>
        <p>Main</p>
        <button onClick={handlerClick}>change isToken</button>
        <p>IsToken: {isToken ? 'true' : 'false'}</p>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default WelcomePage;
