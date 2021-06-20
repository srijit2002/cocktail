import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { useParams} from "react-router-dom"
import { useGlobalContext } from "../context";
import Button from "../Components/Button"

const Cocktail = () => {
    const showURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;
    const [drink, setDrink] = useState([]);
    const { id } = useParams();
    const { setLoading } = useGlobalContext();

    const fetchData = async (url) => {
        try {
            setLoading(true);
            const response = await fetch(url)
            const { drinks } = await response.json()
            setLoading(false);
            setDrink(...drinks)
        }
        catch (error) {
           alert(`Some error occured due to ${error}`)
        }
    }
    useEffect(() => {
        fetchData(`${showURL}${id}`)
    }, [id])

    return (
        <ContainerWrapper>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <ContainerDetails>
                <ul>
                    <li><span>Name: </span>{drink.strDrink}</li>
                    <li><span>Category: </span>{drink.strCategory}</li>
                    <li><span>Glass Type: </span>{drink.strGlass}</li>
                    <li><span>Ingredients: </span>
                        <ol type="1">
                            <li>{drink.strIngredient1}</li>
                            <li>{drink.strIngredient2}</li>
                            <li>{drink.strIngredient3}</li>
                        </ol>
                    </li>
                </ul>
                    <Button path="/cocktailfinder" text="Back to home"/>
            </ContainerDetails>
        </ContainerWrapper>
    )
}

const ContainerWrapper = styled.main`
    position: relative;
    max-width:700px;
    background-color:var(--tertiary-clr);
    margin:5em auto;
    display: flex;
    border-radius:0.4rem;
    overflow:hidden;
    box-shadow:0rem 0rem 1.7rem var(--shadow-clr);
    img{
        width:55%;
        display:block;
        @media(max-width:807px){
           width:100%;
        }
    }
    @media(max-width:807px){
      flex-direction: column;
      width:70vw;
    }
`;
const ContainerDetails = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding:0 1em;
    ul li{
        list-style: none;
        font-size:1.3rem;
        color:#fff;
        font-family:var(--ff-primary);
        span{
            font-size:1.4rem;
            font-weight:500;
            color:var(--shadow-clr);
            @media(max-width:470px){
                 font-size:1.32rem;
             }
        }
        @media(max-width:470px){
            font-size:1.12rem;
        }
    
   }
   @media(max-width:807px){
        margin:2em 0;
    }
  
`;

export default Cocktail;