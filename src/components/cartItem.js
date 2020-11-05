import React from "react";
import styled from 'styled-components';

import { Store } from "../App";

const CartSoup = styled.li`
margin-top: 16px;
background-color: white;
font-size: 20px;
width: 373px;
height: 50px;
position: relative;
`

const CartItem = ({ item }) => {
    const { dispatch } = React.useContext(Store);

    const handleRemove = () => {
        dispatch({ type: "removeFromCart", payload: item.itemID });
    };

    return (
        <CartSoup>
            <p>{item.name}, {item.price}:-</p>
            <button onClick={() => handleRemove()}>Ta bort</button>
        </CartSoup>
    );
};

export default CartItem;
