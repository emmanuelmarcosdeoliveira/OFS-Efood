import Button from '../Button';
import Tag from '../Tag';
import {
  Avaliacao,
  RestCard,
  RestDescription,
  Tagsinfos,
  TitleGroup,
} from './styles';

export type Props = {
  img: string;
  tag: string[];
  title: string;
  nota: string;
  estrela: string;
  description: string;
  width: restaurante | produtos;
  background: restaurante | produtos;
  color: restaurante | produtos;
};
export const RestaurantCard = ({
  img,
  tag,
  title,
  nota,
  estrela,
  description,
  width = 'restaurante',
  background = 'restaurante',
  color = 'restaurante',
}: Props) => (
  <RestCard background={background} color={color} width={width}>
    <img src={img} alt="{title}" />
    <Tagsinfos>
      {tag.map(item => (
        <Tag key={item}>{item}</Tag>
      ))}
    </Tagsinfos>
    <TitleGroup>
      <h3>{title}</h3>
      <Avaliacao>
        <span>{nota}</span>
        <img src={estrela} alt="Estrelas" />
      </Avaliacao>
    </TitleGroup>
    <RestDescription>{description}</RestDescription>
    <Button
      to="/restaurantes"
      type="link"
      title="Veja o cardáio do Restaurante"
    >
      Saiba Mais
    </Button>
  </RestCard>
);

export default RestaurantCard;
