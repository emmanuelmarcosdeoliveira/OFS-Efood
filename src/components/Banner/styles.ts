import styled from 'styled-components';
import { colors } from '../../styles';

export const BoxBanner = styled.div`
  display: block;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  h2 {
    position: absolute;
    color: ${colors.white};
    font-weight: 900;
    font-size: 32px;
    line-height: 37px;
    padding-top: 214px;
  }
`;
