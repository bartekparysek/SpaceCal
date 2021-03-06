import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
   }

   body {
      color: #fff;
      font-family: 'News Cycle', sans-serif;
      background-color: #353B48;
      margin:0;
   }
   h1, h2{
      padding-left: 1rem;
      white-space: nowrap;
      @media (max-width: 375px){
         padding-left: 0.5rem;
         margin:0;
      }
      @media (max-width: 290px){
         font-size: 24px;
      }
   }
   h3{
      margin:0;
      white-space: nowrap;
   }
   p{
      margin:0;
   }
`

export default GlobalStyle;