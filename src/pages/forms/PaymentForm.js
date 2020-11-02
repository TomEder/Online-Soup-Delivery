import React from 'react';
import { Link } from 'react-router-dom';

const PaymentForm = () => {


    return (
        <div>
            <Link to="/">
                <h4>{"<"} Back</h4>
            </Link>
            <h1>Fyll i kortuppgifter</h1>
            <form action="">
                <input type="text" placeholder='0000 0000 0000 0000 0000' />
                <input type="text" placeholder='Förnamn' />
                <input type="text" placeholder='Efternamn' />
                <input type="text" placeholder='MM/ÅÅ' />
                <input type="text" placeholder='CVC' />

                <button type="submit"><Link to={'/confirmation'}>
                    Vidare
                    </Link></button>
            </form>

        </div>
    );
};

export default PaymentForm;