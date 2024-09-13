import { FooterCopy, MyFooter, SocialMedia } from './styles';
import Facebook from '/facebook.svg';
import Instagran from '/instagram.svg';
import Logo from '/logo-Effod.svg';
import Twitter from '/twitter.svg';
const Footer = () => (
  <MyFooter>
    <img src={Logo} alt="" />
    <div>
      <SocialMedia>
        <li>
          <a href="#">
            <img src={Instagran} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Twitter} alt="" />
          </a>
        </li>
      </SocialMedia>
    </div>
    <FooterCopy>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </FooterCopy>
  </MyFooter>
);

export default Footer;
