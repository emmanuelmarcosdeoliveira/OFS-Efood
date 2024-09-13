import styled from 'styled-components';

export const HeadHome = styled.div`
  height: 384px;
`;
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    padding-top: 40px;
    padding-bottom: 138px;
  }
  & h1 {
    max-width: 539px;
    text-align: center;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
  }
`;
