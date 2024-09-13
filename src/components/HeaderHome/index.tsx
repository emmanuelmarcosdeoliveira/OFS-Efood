import ImageBack from '../../assets/imgs/background-image.png';
import { Center, HeadHome } from './styles';
import Logo from '/logo-Effod.svg';
const HeaderHome = () => {
  return (
    <HeadHome style={{ backgroundImage: `url(${ImageBack})` }}>
      <Center>
        <img src={Logo} alt="Logo Effod" />
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </Center>
    </HeadHome>
  );
};

export default HeaderHome;
