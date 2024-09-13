import styled from 'styled-components';
import { Props } from '.';
import { colors } from '../../styles';
import { ButtonLink } from '../Button/styles';
import { TagContainer } from '../Tag/styles';

export const RestCard = styled.div<
  Omit<Props, 'img, tag, title, tag, nota, estrela'>
>`
  position: relative;
  max-width: ${props => (props.width === 'restaurante' ? '472px' : '320px')};
  background-color: ${props =>
    props.background === 'restaurante' ? '#fff' : '#E66767'};
  color: ${props => (props.color === 'restaurante' ? '#e66767' : '#ffebd9')};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.primary};
  ${TagContainer} {
    position: absolute;
    top: 16px;
    right: 16px;
  }
  ${ButtonLink} {
    margin: 8px;
  }
`;
export const TitleGroup = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;

  justify-content: space-between;
  & div {
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    display: flex;
    align-items: center;
    & img {
      margin-left: 8px;
      display: inline-block;
      align-items: center;
      width: 21px;
    }
  }
`;

export const RestDescription = styled.p`
  padding: 16px 8px;
  height: 120px;
`;

export const Tagsinfos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  /* display: flex; */
  /* gap: 16px; */
`;
export const Avaliacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  span {
    display: block;
    align-items: baseline;
    justify-content: center;
    font-size: 20px;
  }
`;
