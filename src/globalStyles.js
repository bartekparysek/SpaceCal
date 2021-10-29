import { createGlobalStyle } from "styled-components";

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
    background: -webkit-linear-gradient(255,233,184);
    background: linear-gradient(0deg, rgba(255,233,184,1) 6%, rgba(167,188,223,1) 41%, rgba(25,80,172,1) 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
    @media (max-width: 500px){
      background: #1950ac;

    }
   }
   h1{
    font-size: clamp(1.75rem, 2rem, 2rem);
    padding-left: 1rem;
    white-space: nowrap;
    @media (max-width: 375px){
        margin:1rem;
        padding-left:0;
    }
   }

  p{
    margin:0;
  }
`;

export default GlobalStyle;
