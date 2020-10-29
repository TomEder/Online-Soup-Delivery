import React from "react";

import CartButton from "./cartButton";

const Navbar = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
            <CartButton />
        </nav>
    );
};

export default Navbar;
