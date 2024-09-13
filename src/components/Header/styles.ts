import styled from 'styled-components';
import { colors } from '../../styles';
export const BackgroundHeader = styled.div`
  width: 100%;
  height: 186px;
  background: no-repeat cover;
  padding-top: 40px;
  a {
    font-size: 18px;
    font-weight: 900;
    line-height: 22px;
  }
`;

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LinkItem = styled.li`
  display: flex;
  &:nth-child(2) {
    flex: 1;
  }
  align-items: center;
  justify-content: center;
`;
export const LinkCar = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-left: 8px;
    color: ${colors.primary};
  }
`;
