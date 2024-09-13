import imgBanner from '../../assets/imgs/Italian-food.png';
import { BoxBanner } from './styles';

const Banner = () => {
  return (
    <BoxBanner style={{ backgroundImage: `url(${imgBanner})` }}>
      <div className="container">
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </BoxBanner>
  );
};

export default Banner;
