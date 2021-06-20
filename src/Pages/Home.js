import React from "react";
import Loading from "../Components/Loading"
import {useGlobalContext} from "../context";
import styled from "styled-components";
import Card from "../Components/Card";


const Home=()=>{
    const {loading,searchData}=useGlobalContext();
   
    if(loading){
        return  <Loading/>
    }
    if(!searchData){
        return <h1 className="home__title">No match found</h1>
    }
    else{
        return(
            <>
               <h1 className="home__title">Our Drinks</h1>
                <Menu>
                    {
                        searchData.map((drink)=>{
                           
                            return(
                                <Card key={drink.idDrink} {...drink} />
                            )
                        })
                   }
                </Menu>
            </>
        )
    }
   
}

const Menu=styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
    grid-gap:1.5em;
    place-items: center;
    padding:2em;
    overflow-x: hidden;
    @media(max-width:887px){
        grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
    }
`;
export default Home;