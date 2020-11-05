import React from 'react';
import { Link } from 'react-router-dom';
import { PaymentContainer, PaymentHead, PaymentInput, PayContinue, PayBack } from './Payment.styles';

const PaymentForm = () => {


    return (
        <PaymentContainer>
            <PayBack> <Link to="/" style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}>
                Meny
            </Link></PayBack>
            <PaymentHead>Fyll i kortuppgifter</PaymentHead>
            <form action="">
                <PaymentInput type="text" placeholder='0000 0000 0000 0000 0000' />
                <PaymentInput type="text" placeholder='Förnamn' />
                <PaymentInput type="text" placeholder='Efternamn' />
                <PaymentInput type="text" placeholder='MM/ÅÅ' />
                <PaymentInput type="text" placeholder='CVC' />

                <PayContinue type="submit"><Link to={'/confirmation'} style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}>
                    Vidare
                    </Link></PayContinue>
            </form>

        </PaymentContainer>
    );
};

export default PaymentForm;