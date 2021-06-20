import React from 'react'
import styled from 'styled-components'
import Button from "./Button"

const Card=({idDrink,strAlcoholic,strDrinkThumb,strCategory,strDrink})=>{
    
    return (
        <CardWrapper>
            <img src={strDrinkThumb} alt={strDrink} />
            <CardDetails>
                <CardHeading>
                    <h1>{strDrink}</h1>
                    <h2>{strAlcoholic}</h2>
                </CardHeading>
                    <SubHeading>{strCategory}</SubHeading>
            </CardDetails>
            <Button path={`/cocktail/${idDrink}`} text="Details"/>
            
        </CardWrapper>
    )
}

const CardWrapper=styled.article`
    max-width:50ch;
    border-radius:0.2rem;
    overflow:hidden;
    background-color:#fff;
    box-shadow:0rem 0rem 2rem var(--shadow-clr);
    display: flex;
    flex-direction:column;
    img{
        width:100%;
    }
    @media(max-width:887px){
        max-width:35ch;
    }
    @media(max-width:565px){
       max-width:90vw;
    }
`;

const CardDetails=styled.div`
    padding:1em;
`;

const CardHeading=styled.div`
    display:flex;
    justify-content: space-between;
    font-family:var(--ff-primary);
    user-select:none;
    h1{
       font-size:2rem;
       font-weight:500;
       @media(max-width:366px){
        font-size:1.8rem;
        }
    }
    h2{
        font-size:1rem;
        font-weight:200;
        color:#fff;
        background-color:var(--primary-clr);
        height:fit-content;
        padding:0.3em 0.6em;
        border-radius:0.1rem;
    }
`;
const SubHeading=styled.h2`
     font-family:var(--ff-secondary);
     font-size:1rem;
`;
export default Card;