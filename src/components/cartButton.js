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
                fontSize: "20px",
                background: "green",
                opacity: "70%",
                color: "white",
                width: "10rem",
                height: "2rem"
            }}
        >
            <h5>Gå till varukorgen, {itemsInCart}</h5>
        </Link>
    );
};

export default CartButton;
