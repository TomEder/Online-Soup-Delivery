import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/cartItem";
import { CartContainer, BackLink, ClearButton, Continue, CartList, CartHead } from './cart.styles';





const Cart = ({ store }) => {
    const { state, dispatch } = React.useContext(store);

    return (
        <CartContainer>
            <CartHead>Varukorgen</CartHead>
            <BackLink><Link to="/" style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }} >
                Backa
            </Link>
            </BackLink>
            <CartList>
                {state.cart.map((item, i) => (
                    <CartItem key={item.name + i} item={item} />
                ))}
            </CartList>
            <ClearButton onClick={() => dispatch({ type: "clear" })}>Rensa korgen</ClearButton>
            <Continue><Link to={'/prelogin'} style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}>
                Vidare
                    </Link>
            </Continue>
        </CartContainer>
    );
};

export default Cart;