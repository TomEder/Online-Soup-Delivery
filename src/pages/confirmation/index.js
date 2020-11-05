import React from "react";
import { Link } from "react-router-dom";
import SummaryItem from "../../components/summaryitem";
import { ConContainer, ConHead, ConSub, ConText, ConTo, ConAddress, ConOrdered, ConSoups, ConBack, CuponImg } from './confirm.styles'
import cupon from '../../images/Cupon.png'



const getCompleteAddress = (user) => `${user.firstName}  ${user.lastName}, ${user.address} ${user.zipCode} ${user.city}`

const Confirmation = ({ store }) => {
    const { state } = React.useContext(store);

    return (
        <ConContainer>
            <ConBack><Link to="/" style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}>
                Meny
            </Link>
            </ConBack>
            <ConHead>Tack för din beställning!</ConHead>
            <ConSub>En bekräftelse är skickad till din e-post.</ConSub>
            <ConText>Din mat tillagas nu...</ConText>
            <ConText>Estimerad leveranstid 20:00</ConText>
            <ConTo>Levereras till:</ConTo>

            <ConAddress>
                {getCompleteAddress(state.user)}
            </ConAddress>
            <ConOrdered>Beställda varor:</ConOrdered>
            <ConSoups>
                {state.cart.map((item, i) => (
                    <SummaryItem key={item.name + i} item={item} />
                ))}
            </ConSoups>

            <CuponImg src={cupon} alt="" />


        </ConContainer>
    );
};

export default Confirmation;