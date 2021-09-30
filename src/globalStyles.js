import { createGlobalStyle } from 'styled-components';
import image from "./assets/app_background.jpeg";

const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
   }

   html,body {
      color: #000000;
      font-family: 'News Cycle', sans-serif;
      font-size: clamp(0.75rem, 1rem, 1.5rem);
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
   h1, h2{
      padding-left: 1rem;
      white-space: nowrap;
      font-size: clamp(0.75rem, 1vw + 1rem, 2vw + 0.5rem);
      @media (max-width: 375px){
         padding-left: 0.5rem;
         margin:0;
      }
   }
   h2{
      margin:0;
   }
   h3{
      font-size: clamp(0.5rem, 1vw + 0.5rem, 1vw + 0.5rem);
      margin:0;
      white-space: nowrap;
   }
   p{
      margin:0;
   }
`

export default GlobalStyle;