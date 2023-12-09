import { MainLayout } from '../../Layouts/Main/Main';
import useToken from '../../hooks/useToken';
import RSS from './RSS';

const WelcomePage = () => {
  const isToken = useToken(false);

  return (
    <MainLayout>
      <p>Welcome</p>
      <p>IsToken: {isToken ? 'true' : 'false'}</p>
      <RSS />
    </MainLayout>
  );
};

export default WelcomePage;
