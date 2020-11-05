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
background-color: #FEFBF7;
`
const SoupImage = styled.img`
width: 375px;
position: relative;
z-index: 1;
`

const TitleContainer = styled.div`

background-color: rgba(0, 0, 0, 0.6);
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
margin-right: 0;
padding: 5px;
position: relative;
z-index: 2;
bottom: 24px;
width: 20px;
left: 331px;
color: white;
`
const Ingredients = styled.p`
position: relative;
bottom: 15px;
color: white;
`
const SoupLink = styled.h3`
margin: 0;
font-size: 20px;
text-decoration: none;
background-color: rgba(0, 0, 0, 0.6);
position: Absolute;
top: 334px;
flex-direction: row;
width: 15%;
height: 40px;
z-index: 2; 
color: white;
cursor: pointer;
justify-content: center;
text-align: center;
`


const SoupMenu = ({ soup }, { store }) => {
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
                Välj
                    </Link>
            </SoupLink>



        </SoupContainer>
    );
};

export default SoupMenu;
