import marguerita from '../assets/imgs/produtos/marguerita.png';
import Banner from '../components/Banner';
import HeroSection from '../components/HeroSection';
import RestaurantsList from '../components/RestaurantsList';
import Produtos from '../models/Produtos';
import Estrela from '/estrela.svg';
const ListadeProdutos: Produtos[] = [
  {
    id: 1,
    img: marguerita,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery',
    nota: '4.6',
    estrela: Estrela,
    title: 'Hioki Sushi',
    tag: ['Destque da Semana', 'Japonesa'],
  },
  {
    id: 2,
    img: marguerita,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery',
    nota: '4.6',
    estrela: Estrela,
    title: 'Teste 2 ',
    tag: ['Destque da Semana', 'Japonesa'],
  },
  {
    id: 3,
    img: marguerita,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery',
    nota: '4.6',
    estrela: Estrela,
    title: 'Teste 3',
    tag: ['Destque da Semana', 'Japonesa'],
  },
  {
    id: 4,
    img: marguerita,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery',
    nota: '4.6',
    estrela: Estrela,
    title: 'Teste 4',
    tag: ['Destque da Semana', 'Japonesa'],
  },
];

const Profile = () => {
  return (
    <>
      <main>
        <HeroSection />
        <Banner />
        <RestaurantsList size="produto" restaurantes={ListadeProdutos} />
      </main>
    </>
  );
};
export default Profile;
