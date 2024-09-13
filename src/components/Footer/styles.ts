import styled from 'styled-components';
import { colors } from '../../styles';

export const MyFooter = styled.footer`
  height: 298px;
  height: 100%;
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    padding-top: 40px;
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 80px;
`;

export const FooterCopy = styled.p`
  text-align: center;
  font-size: 10px;
  line-height: 11px;
  max-width: 480px;
  padding-bottom: 40px;
`;
