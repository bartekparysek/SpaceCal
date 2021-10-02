import { createGlobalStyle } from 'styled-components';
import image from "./assets/app_background.jpeg";

const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
   }

   html,body {
      color: #000000;
      font-family: 'News Cycle', sans-serif;
      font-size: clamp(0.8rem,0.5vw + 0.5rem, 1rem);
      margin:0;
      height: 100%;
   }
   body{
      background-image: url(${image});
      background-position: center center;
	   background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
   }
   h1{
      font-size: clamp(1.75rem, 2rem, 2rem);
      padding-left: 1rem;
      white-space: nowrap;
      @media (max-width: 375px){
         margin:1rem;
      }
   }

   p{
      margin:0;
   }
`

export default GlobalStyle;