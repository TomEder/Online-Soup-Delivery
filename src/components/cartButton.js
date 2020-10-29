import React from "react";
import { Link } from "react-router-dom";

import { Store } from "../App";

const CartButton = () => {
    const {
        state: { itemsInCart }
    } = React.useContext(Store);

    return (
        <Link
            to="/cart"
            style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                alignItems: "center",
                background: "black",
                color: "white",
                width: "2rem",
                height: "2rem"
            }}
        >
            <h5>{itemsInCart}</h5>
        </Link>
    );
};

export default CartButton;
