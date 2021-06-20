import { Link } from "react-router-dom";
import styled from "styled-components";
import {ImSearch} from "react-icons/im";
import {CgMenuGridR} from "react-icons/cg";
import {useGlobalContext} from "../context";
import {useState} from "react";
const Navbar = () => {
    const [scale,setScale]=useState(0);
    const [scaleForHamburger,setScaleForHamburger]=useState(0);
    const {searchTerm, setSearchTerm}=useGlobalContext();
    const ToggleHamburgerMenu=()=>{
        if(scaleForHamburger===0){
            setScaleForHamburger(1)}
            else{setScaleForHamburger(0)}
    }
    return (
        <Navpanel >
                <CgMenuGridR className="icon hamburger--icon" onClick={()=>ToggleHamburgerMenu()}/>
               
                <HamburgerMenu scaleValue={scaleForHamburger}>
                    <li><Link className="link" to="/cocktailfinder">Home</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                </HamburgerMenu>
            
            <ul>
                <li><Link className="link" to="/cocktailfinder">Home</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
            </ul>
            <SearchWrapper>
                <SearchBar value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} style={{transform:`scaleX(${scale})`}}/>
                <ImSearch className="icon search--icon" onClick={()=>{(scale===0)?setScale(1):setScale(0)}}/>
             </SearchWrapper>
        </Navpanel>
    )
}

const Navpanel = styled.nav`
margin-bottom:1em;
background-color:var(--secondary-clr);
display:flex;
justify-content: center;
align-items: center;
.icon{
        font-size:2rem;
        color:#fff;
        cursor:pointer;
        z-index:2;
        @media(max-width:500px){
            font-size:1.7rem;
        }
    }
    ul{
        margin:1em;
        display:flex;
     li{
            list-style:none;
            margin:0 1em;
            position: relative;
           .link{
               text-decoration: none;
               font-family:var(--ff-primary);
               font-size:1.4rem;
               color:#fff;
           }
           &::after{
               content:"";
               position: absolute;
               bottom:0;
               left:0;
               background-color:#fff;
               width:100%;
               height: 0.1rem;;
               transform:scaleX(0);
               transform-origin:right;
               transition: transform 300ms ease-out;
           }
           &:hover::after{
               transform:scaleX(1);
               transform-origin:left;
           }
        }
        @media(max-width:565px){
            display:none;
        }
    }
    .search--icon{
        z-index:0;
        background-color: var(--shadow-clr);
        padding:0.15em;
        border-radius:0.2rem;
        opacity: 0.87;
        transition: opacity 200ms;
        &:hover{
            opacity:1;
        }
    }
    .hamburger--icon{
        display:none;
        z-index:2;
        @media(max-width:565px){
            display:initial;
        }
    }
    @media(max-width:527px){
        justify-content: center;
    }



`
const SearchBar=styled.input`
    padding:0.3em;
    height:2rem;
    font-size:1.3rem;
    margin:0 0.1em;
    transition: transform 400ms;
    transform-origin: right;
    @media(max-width:366px){
       width:60vw;
    }
`;

const SearchWrapper=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin:1em 0em;
`;

const HamburgerMenu=styled.div`
    display:none;
    position:absolute;
    top:9%;
    left:50%;
    width:100vw;
    background-color:rgba(0,0,0,0.7);
    z-index:1;
    transition: transform 400ms ease-in;
    transform-origin: top;
    transform:translate(-50%,-50%) scaleY(${
        (value)=> {return value.scaleValue}});
    li{
        list-style:none;
        font-size:2rem;
        padding:0.4em;
        text-align:center;
        border-bottom:1px solid #fff;
        transition: background-color 300ms;
        &:hover,
        &:focus{
            background-color:rgba(0,0,0,0.4);
        }
        a{
            text-decoration:none;
            color:#fff;
            font-family:var(--ff-secondary)
        }
    }
    @media(max-width:565px){
        display:block;
    }
`;
export default Navbar;