import ImageBack from '../../assets/imgs/background-image.png';
import { BackgroundHeader, LinkCar, LinkItem, Links } from './styles';
import Logo from '/logo-Effod.svg';
import Car from '/shopping-cart.svg';
const Header = () => (
  <BackgroundHeader style={{ backgroundImage: `url(${ImageBack})` }}>
    <div className="container">
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Restaurantes</a>
          </LinkItem>
          <LinkItem>
            <a href="">
              <img src={Logo} alt="/" />
            </a>
          </LinkItem>
          <LinkItem>
            <LinkCar href="#">
              0 produto(s) no Carrinho
              <img src={Car} alt="Carrinho de compras" />
            </LinkCar>
          </LinkItem>
        </Links>
      </nav>
    </div>
  </BackgroundHeader>
);

export default Header;
