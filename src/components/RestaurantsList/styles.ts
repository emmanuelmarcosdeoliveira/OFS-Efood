import styled from 'styled-components';

import { Props } from '.';

export const RestGrid = styled.div<Omit<Props, 'restaurantes'>>`
  display: grid;
  grid-template-columns: ${props =>
    props.size === 'restaurante' ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  gap: 80px;
  padding-block: 80px;
`;
