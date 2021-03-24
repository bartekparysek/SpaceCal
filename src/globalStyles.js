import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   body {
      color: #fff;
      font-family: 'D-DIN-Bold', sans-serif;
      margin:0 auto;
      box-sizing: border-box;
      background-color: #353B48;
   }
   h1, h2, h3{
      padding-left: 1rem;
      white-space: nowrap;
      @media (max-width: 375px){
         padding-left: 0.5rem;
      }
   }
   h3{
      margin:0;
   }
   p{
      margin:0;
      white-space: nowrap;
   }
`

export default GlobalStyle;