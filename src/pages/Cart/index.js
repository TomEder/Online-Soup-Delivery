import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/cartItem";
import { soups } from '../../SoupData';





const Cart = ({ store }) => {
    const { state, dispatch } = React.useContext(store);

    return (
        <div>
            <Link to="/">
                <h4>{"<"} Back</h4>
            </Link>
            <ul>
                {state.cart.map((item, i) => (
                    <CartItem key={item.name + i} item={item} />
                ))}
            </ul>
            <button onClick={() => dispatch({ type: "clear" })}>Rensa korgen</button>

        </div>
    );
};

export default Cart;