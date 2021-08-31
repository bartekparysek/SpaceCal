import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
   }

   html,body {
      color: #000000;
      font-family: 'News Cycle', sans-serif;
      margin:0;
      height: 100%;
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