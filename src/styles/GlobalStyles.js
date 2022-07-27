import { createGlobalStyle } from 'styled-components';
import { FontKnewave } from './fontKnewave';

export const GlobalStyles = createGlobalStyle`
  ${FontKnewave}
  
  html {
    box-sizing: border-box;
    font-family: "Knewave", cursive;
  }
  ::-webkit-scrollbar {
    display: none;
  }      
  *, *::before, *::after {
    box-sizing: inherit;
  }
        
  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }
  ul {
    list-style: none;
  }
  /* button {
    background: transparent;
    border: 0;
    outline: 0;
  } */
  body {
    background: #353540;    
    margin: 0 auto;    
    overscroll-behavior: none;
    width: 100%;
  }
  
`