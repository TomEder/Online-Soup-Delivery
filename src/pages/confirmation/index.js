import React from "react";
import { Link } from "react-router-dom";
import SummaryItem from "../../components/summaryitem";
import { ConContainer, ConHead, ConSub, ConText, ConTo, ConAddress, ConOrdered, ConSoups, ConBack } from './confirm.styles'



const getCompleteAddress = (user) => `${user.address} ${user.zipCode} ${user.city}`

const Confirmation = ({ store }) => {
    const { state } = React.useContext(store);

    return (
        <ConContainer>
            <ConBack><Link to="/" style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}>
                Tillbaka
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


        </ConContainer>
    );
};

export default Confirmation;