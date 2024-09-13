import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles';

export const ButtonContainer = styled.button`
  max-width: 304px;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  border: none;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 4px 6px;
`;

export const ButtonLink = styled(Link)`
  max-width: 82px;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 4px 6px;
`;
