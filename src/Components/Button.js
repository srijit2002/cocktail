import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components/macro"

const style=
   `background-color:var(--shadow-clr);
    width:fit-content;
    margin:1em;
    color:#fff;
    list-style:none;
    font-size:1.2rem;
    padding:0.4em 0.8em;
    text-decoration: none;
    font-family:var(--ff-secondary);
    border-radius:0.3rem;
    opacity:0.8;
    transition: opacity 400ms;
    user-select:none;
    :hover{
        opacity:1;
    }`;
 
export default function Button({...prop}) {
    
    return (
           <Link css={style} to={prop.path}>{prop.text}</Link>
    )
}



