import React from "react";
import styled from 'styled-components';

import { Store } from "../App";

const CartSoup = styled.li`
margin-top: 16px;
background-color: white;
font-size: 20px;
display: flex;
flex-direction: row;
width: 373px;
height: 50px;
position: relative;
`
const CartName = styled.p`
font-size: 20px;
padding: 7px;
`
const Remove = styled.p`
    font-size: 15px;
    padding: 10px;
    position: relative;
    left: 50px;
    
`
const CartItem = ({ item }) => {
    const { dispatch } = React.useContext(Store);

    const handleRemove = () => {
        dispatch({ type: "removeFromCart", payload: item.itemID });
    };

    return (
        <CartSoup>
            <CartName>{item.name}, {item.price}:-</CartName>
            <Remove onClick={() => handleRemove()}>Ta bort</Remove>
        </CartSoup>
    );
};

export default CartItem;
