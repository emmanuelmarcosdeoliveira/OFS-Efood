import styled from 'styled-components';
import { Props } from '.';
import { colors } from '../../styles';

export const TagContainer = styled.div<Props>`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: ${props => (props.fontSize === 'big' ? '14px' : '12px')};
  font-weight: 700;
  padding: ${props => (props.padding === 'big' ? '6px 4px' : '10px 8px')};
  display: inline-block;
  line-height: 14px;
  box-shadow: 1px 1px 1px black;
`;
