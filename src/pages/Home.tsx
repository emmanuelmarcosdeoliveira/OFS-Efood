import Japa from '../assets/imgs/Japanese-food.png';
import HeaderHome from '../components/HeaderHome';
import RestaurantList from '../components/RestaurantsList';
import Restaurante from '../models/Restaurant';
import Estrela from '/estrela.svg';
const ListadeRestaurantes: Restaurante[] = [
  {
    id: 1,
    img: Japa,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery',
    nota: '4.6',
    estrela: Estrela,
    title: 'Hioki Sushi',
    tag: ['Destque da Semana', 'Japonesa'],
  },
  {
    id: 2,
    img: Japa,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery',
    nota: '4.6',
    estrela: Estrela,
    title: 'Teste 2 ',
    tag: ['Destque da Semana', 'Japonesa'],
  },
  {
    id: 3,
    img: Japa,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery',
    nota: '4.6',
    estrela: Estrela,
    title: 'Teste 3',
    tag: ['Destque da Semana', 'Japonesa'],
  },
  {
    id: 4,
    img: Japa,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery',
    nota: '4.6',
    estrela: Estrela,
    title: 'Teste 4',
    tag: ['Destque da Semana', 'Japonesa'],
  },
];

const Home = () => {
  return (
    <>
      <HeaderHome />
      <RestaurantList restaurantes={ListadeRestaurantes} size="restaurante" />
    </>
  );
};

export default Home;
