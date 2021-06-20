import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding:0;
        box-sizing:border-box;
   }
  
    #root{
        width:100vw;
        min-height:100vh;
       
    }
    :root{
        --primary-clr:#0070ffc4;
        --ff-primary:'Roboto', sans-serif;;
        --ff-secondary:'Ubuntu', sans-serif;
        --primary-clr:#E93B81;
        --secondary-clr:#3289da;
        --tertiary-clr:#489CE6C2;
        --shadow-clr:#022E57;
    }
   
    body{
        width:100vw;
        background-image: linear-gradient(to left,#9ad5f9eb,#d4edfb,#9ad5f9eb);
    }
    .home__title{
        position: relative;
        text-align:center;
        font-family:var(--ff-primary);
        font-weight: 500;
        font-size:3rem;
        margin:1em 0;
        color:var(--shadow-clr);
        padding-bottom: 0.1em;
        @media(max-width:366px){
            font-size:2.4rem;
            margin:0.5em 0;
         }
    }
    .home__title::after{
        content:"";
        position: absolute;
        bottom:0;
        left:50%;
        transform:translate(-50%,-50%);
        width:5rem;
        height:0.35rem;
        background-color: var(--shadow-clr);
    }
  
  `

export default GlobalStyle;