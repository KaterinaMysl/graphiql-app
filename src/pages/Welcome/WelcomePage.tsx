import { useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/slices/isTokenSlice';
import RSS from './RSS';
import Header from '../../components/Header/Header';

const WelcomePage = () => {
  const dispatch = useDispatch();
  const { isToken } = useAppSelector((state: RootState) => state.isTokenSlice);

  const handlerClick = () => {
    dispatch(setToken(!isToken));
  };
  return (
    <div className="container">
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
