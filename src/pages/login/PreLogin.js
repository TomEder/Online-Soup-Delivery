import React from 'react';
import { Link } from 'react-router-dom';

const PreLogin = () => {


    return (
        <div>
            <Link to="/">
                <h4>{"<"} Back</h4>
            </Link>
            <h1>Var sjunde soppa gratis</h1>
            <button>Logga in</button>
            <button>skapa konto</button>
            <Link to={'/addressform'}>Fortsätt som gäst</Link>
        </div>
    );
};

export default PreLogin;