import { createGlobalStyle } from 'styled-components';

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
  }
  body {
    font-family: "Roboto", system-ui, 'sans-serfi';
    background-color: ${colors.background};
    color: ${colors.primary};
    }
   .container {
    max-width: calc(1366px - 342px);
  width: 100%;
  margin-inline: auto;
   }
   a{
    text-decoration: none;
    color: inherit;
     }

     li {
      list-style: none;
     }

`;
