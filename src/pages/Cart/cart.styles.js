import styled from 'styled-components';


export const CartContainer = styled.div`
margin: 0;
height: 812px;
background-color: #FEFBF7;
`

export const CartHead = styled.h1`
position: relative;
font-size: 40px;
padding: 15px;
text-align: center;
`

export const BackLink = styled.h3`
position: fixed;
width: 183px;
font-size: 30px;
height: 40px;
border: 2px solid beige;
background-color: #E57A44;
opacity: 70%;
margin: 0;
bottom: 0px;
cursor: pointer;
z-index: 2;
`

export const ClearButton = styled.h3`
margin: 0;
margin-top: 15px;
font-size: 14px;
text-decoration: none;
background-color: #E57A44;
position: relative;
width: 25%;
opacity: 70%;
z-index: 2; 
color: white;
cursor: pointer;
justify-content: center;
box-shadow: 1px 1px 1px 2px grey;


`
export const Continue = styled.h3`
position: fixed;
width: 183px;
font-size: 30px;
height: 40px;
margin: 0;
text-decoration: none;
left: 191px;
border: 2px solid beige;
text-decoration: none;
background-color: #E57A44;
opacity: 70%;
bottom: 0px;
cursor: pointer;
`

export const CartList = styled.ul`
list-style-type: none;
width: 100%;
z-index: 1;
`