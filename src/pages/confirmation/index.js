import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/cartItem";




const getCompleteAddress = (user) => `${user.address} ${user.zipCode} ${user.city}`

const Confirmation = ({ store }) => {
    const { state, dispatch } = React.useContext(store);

    return (
        <div>
            <Link to="/">
                <h4>{"<"} Back</h4>
            </Link>
            <h1>Tack för din beställning!</h1>
            <h3>En bekräftelse är skickad till din e-post.</h3>
            <p>Din mat tillagas nu...</p>
            <p>Estimerad leveranstid 20:00</p>
            <h2>Levereras till:</h2>

            <div>
                {getCompleteAddress(state.user)}
            </div>
            <h4>Beställda varor:</h4>
            <ul>
                {state.cart.map((item, i) => (
                    <CartItem key={item.name + i} item={item} />
                ))}
            </ul>


        </div>
    );
};

export default Confirmation;