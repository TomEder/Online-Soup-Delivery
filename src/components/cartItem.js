import React from "react";

import { Store } from "../App";

const CartItem = ({ item }) => {
    const { dispatch } = React.useContext(Store);

    const handleRemove = () => {
        dispatch({ type: "remove", payload: item.itemID });
    };

    return (
        <li>
            <p>{item.name}, {item.price}:-</p>
            <button onClick={() => handleRemove()}>Ta bort</button>
        </li>
    );
};

export default CartItem;
