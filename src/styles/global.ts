import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
    font-family: 'Bai Jamjuree', sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
  }
`;
