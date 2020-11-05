import React from 'react';
import { Link } from 'react-router-dom';
import { LoginHeader, LoginButton, CreateButton, GuestButton, LoginBack, LoginContainer, LoginSub } from './PreLogin.styles'

const PreLogin = () => {


    return (
        <LoginContainer>
            <LoginBack><Link to="/" style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}>
                Meny
            </Link>
            </LoginBack>
            <LoginHeader>Var sjunde soppa på köpet!</LoginHeader>
            <LoginSub>Logga in eller skapa ett konto för att <br /> ta del av erbjudandet!</LoginSub>
            <LoginButton>Logga in</LoginButton>
            <CreateButton>Skapa konto</CreateButton>
            <GuestButton><Link to={'/addressform'} style={{ textDecoration: "none", color: "white" }}>Fortsätt som gäst</Link></GuestButton>
        </LoginContainer>
    );
};

export default PreLogin;