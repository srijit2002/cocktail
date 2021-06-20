import React from "react";
import styled from "styled-components"

const About=()=>{
    return(
        <Wrapper>
            <h1>This website has been created using ReactJS and Styled Components.</h1>
            <h2>API service provided by<br/><a target="__blank" href="https://www.thecocktaildb.com/api.php">TheCocktailDB.com</a></h2>
            
        </Wrapper>
    )
}

const Wrapper=styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color:#fff;
    padding:1.2em;
    font-family:var(--ff-primary);
    h1{
        font-weight:300;
        word-wrap: break-word;
        font-size:2rem;
        line-height:2rem;
        @media(max-width:480px){
            font-size:1.5rem;
            line-height:1.6rem;
        }
    }
    h2{
        margin-top:1em;
        text-align:center;
        font-size:1.3rem;
        font-weight:300;
        @media(max-width:480px){
            font-size:1rem;
        }
    }
`

export default About;