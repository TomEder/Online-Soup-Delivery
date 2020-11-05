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
width: 110px;
font-size: 25px;
height: 40px;
border: 2px solid beige;
background-color: #E57A44;
text-decoration: none;
opacity: 70%;
margin: 0;
bottom: 0px;
cursor: pointer;
text-align: center;
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
text-align: center;

`
export const Continue = styled.h3`
position: fixed;
width: 250px;
margin: 0;
font-size: 30px;
height: 40px;
border: 2px solid beige;
background-color: #BCE96B;
opacity: 70%;
left: 120px;
bottom: 0px;
cursor: pointer;
text-align: center;
`

export const CartList = styled.ul`
list-style-type: none;
width: 100%;
z-index: 1;
`