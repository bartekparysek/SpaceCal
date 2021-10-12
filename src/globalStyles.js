import { createGlobalStyle } from 'styled-components';
import image from "./assets/app_background.jpeg";
import mobile_image from "./assets/mobile_background.webp";

const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
   }

   html,body {
      color: #000000;
      font-family: 'News Cycle', sans-serif;
      font-size: clamp(0.8rem,0.6vw + 0.6rem, 1rem);
      margin:0;
      height: 100%;
   }
   body{
      background-image: url(${image});
      background-position: center center;
	   background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      @media (max-width: 425px){
         background-image: url(${mobile_image});
      }
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