import styled from 'styled-components';

export const InfoContainer = styled.div`
margin: 0;
height: 812px;
background-color: #FEFBF7;
`

export const InfoImage = styled.img`
position: relative;
margin: 0;
top: 0;
z-index: 1;
`

export const InfoText = styled.div`
height: 100%;
position: relative;
background-color: rgba(0, 0, 0, 0.8);
margin: 0;
color: white;
bottom: 816px;
z-index: 2;
`
export const InfoName = styled.h1`
position: relative;
font-size: 40px;
padding: 15px;
text-align: center;
`

export const InfoType = styled.h1`
margin: 15px;
font-size: 30px;
color: white;
z-index: 2;
`
export const InfoList = styled.h1`
margin: 15px;
color: white;
font-size: 14px;
z-index: 2;
list-style-type: none;
`
export const AddButton = styled.h3`
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

export const InfoBack = styled.h3`
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