import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import './soup.css'

const SoupContainer = styled.div`
margin: 0;
width: 100%;
position: relative;
height: 375px;
margin-top: 5px;
display: flex;
`
const SoupImage = styled.img`
width: 375px;
position: relative;
z-index: 1;
`

const TitleContainer = styled.div`

background-color: rgba(0, 0, 0, 0.5);
position: absolute;
flex-direction: row;
width: 375px;
height: 65px;
z-index: 2; 
`
const SoupTitle = styled.h2`
margin: 0;
position: relative;
z-index: 2;
top: 2px;
bottom: 391px;
color: white;
`
const SoupPrice = styled.h4`
margin: 0;
position: relative;
z-index: 2;
bottom: 24px;
left: 331px;
color: white;
`
const Ingredients = styled.p`
position: relative;
bottom: 5px;
color: white;
`
const SoupLink = styled.h3`
margin: 0;
font-size: 20px;
text-decoration: none;
background-color: rgba(0, 0, 0, 0.5);
position: Absolute;
top: 334px;
flex-direction: row;
width: 25%;
height: 40px;
z-index: 2; 
color: white;
cursor: pointer;
justify-content: center;
`


const SoupMenu = ({ soup }) => {
    const { name, price, ingredients, image } = soup;

    return (
        <SoupContainer>
            <SoupImage src={image} alt="" />
            <TitleContainer>
                <SoupTitle>{name}</SoupTitle>
                <SoupPrice>{price}:-</SoupPrice>
                <Ingredients>Med {ingredients}</Ingredients>
            </TitleContainer>



            <SoupLink> <Link to={`/soups/${soup.id}`} style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}>
                Info
                    </Link>
            </SoupLink>


        </SoupContainer>
    );
};

export default SoupMenu;
