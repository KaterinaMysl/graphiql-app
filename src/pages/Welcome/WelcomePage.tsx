import useToken from '../../hooks/useToken';
import RSS from './RSS';

const WelcomePage = () => {
  const isToken = useToken(false);

  return (
    <>
      <p>Welcome</p>
      <p>IsToken: {isToken ? 'true' : 'false'}</p>
      <RSS />
    </>
  );
};

export default WelcomePage;
