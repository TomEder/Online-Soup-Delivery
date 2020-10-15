import styled from 'styled-components';

export const MenuContainer = styled.div`
display: flex;
flex-direction: column;
align-self: center;
position: relative;
top: 700px;
`
export const CardContainer = styled.div`
top: -62px;
width: 100%;
height: 381px;
position: relative;
margin: 0;
`
export const CardTitle = styled.div`
border: 1px solid black;
background: rgba(0, 0, 0, 0.6);
top: 55px;
width: 100%;
position: absolute;
`

export const MenuHead = styled.h1`
font-size: 30px;
margin: 2;
position: relative;
align-self: center;
`
export const MenuImg = styled.img`
height: 375px;
width: 375px;
margin-bottom: 5px;

`
//CardOptions, CardInfo, CardAdd

export const CardOptions = styled.div`
top: 375px;
position: relative;
background: rgba(0, 0, 0, 0.4);
display: flex;
flex-direction: row;
`
export const CardInfo = styled.div`
top: 0;
width: 50%;

border: 1px solid black;
`
export const CardAdd = styled.div`
top: 0;
width: 50%;

right: 0;
border: 1px solid black;
`



export const CardTitleText = styled.h3`
color: white;
`

export const CardText = styled.p`
color: white;
right: 5px;

`