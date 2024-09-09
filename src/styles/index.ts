import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  background: '#FFF8F2',
  primary: '#E66767',
  secondary: '#FFEBD9',
  tertiary: '#FFB930',
  white: '#fff',
};

export const GlobalStles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: "Roboto", system-ui, 'sans-serfi';
    background-color: ${colors.background}
   }
   a {
    text-decoration: none;
    color: inherit
   }
   li {
    list-style: none;
   }
   img {
    max-width: 100%;
   }
`;

export const Wapper = styled.div`
  max-width: 1200px;
  margin-inline: auto;
`;
