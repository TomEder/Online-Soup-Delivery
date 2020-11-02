import React from 'react';
import { Link } from 'react-router-dom';

const AddressForm = () => {


    return (
        <div>
            <Link to="/">
                <h4>{"<"} Back</h4>
            </Link>
            <h1>Var ska soppan?</h1>
            <form action="">
                <input type="text" placeholder='Förnamn' />
                <input type="text" placeholder='Efternamn' />
                <input type="text" placeholder='Gatuadress' />
                <input type="text" placeholder='Postnummer' />
                <input type="text" placeholder='Ort' />
                <input type="text" placeholder='Telefonnummer' />
                <input type="text" placeholder='E-post' />
                <input type="text" placeholder='Våning/Portkod/instruktioner' />
                <button type="submit"><Link to={'/payment'}>
                    Vidare
                    </Link></button>
            </form>

        </div>
    );
}

export default AddressForm;

