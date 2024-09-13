import Restaurante from '../../models/Restaurant';
import RestaurantCard from '../RestaurantCard';
import { RestGrid } from './styles';

export type Props = {
  size: restaurante | produto;
  restaurantes: Restaurante[];
};

const RestaurantList = ({ restaurantes, size }: Props) => {
  if (size === 'restaurante') {
    return (
      <div className="container">
        <RestGrid size={size}>
          {restaurantes.map(rest => (
            <RestaurantCard
              background="restaurante"
              color="restaurante"
              width="restaurante"
              key={rest.id}
              img={rest.img}
              description={rest.description}
              nota={rest.nota}
              estrela={rest.estrela}
              title={rest.title}
              tag={rest.tag}
            />
          ))}
        </RestGrid>
      </div>
    );
  }
  return (
    <div className="container">
      <RestGrid size={size}>
        {restaurantes.map(rest => (
          <RestaurantCard
            background="produto"
            color="produto"
            width="produto"
            key={rest.id}
            img={rest.img}
            description={rest.description}
            nota={rest.nota}
            estrela={rest.estrela}
            title={rest.title}
            tag={rest.tag}
          />
        ))}
      </RestGrid>
    </div>
  );
};

export default RestaurantList;
