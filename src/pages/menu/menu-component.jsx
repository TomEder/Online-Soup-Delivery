import React from 'react';
import { MenuHead, MenuContainer, MenuImg } from './menu.styles';
import gulasch from './gulasch.png';
import kottsoppa from './kottsoppa.png'
import ramen from './ramen.png';
import toscana from './toscana.png';
import majssoppa from './majssoppa.png';
import morotssoppa from './morotssoppa.png';
import skaldjurssoppa from './skaldjurssoppa.png';
import laxsoppa from './laxSoppa.png';

function Menu() {
    return (
        <MenuContainer>
            <MenuHead>Kött eller kyckling</MenuHead>
            <MenuImg src={ramen} alt="Soup" />
            <MenuImg src={kottsoppa} alt="Soup" />
            <MenuHead>Vegetariska</MenuHead>
            <MenuImg src={toscana} alt="Soup" />
            <MenuImg src={gulasch} alt="Soup" />
            <MenuImg src={majssoppa} alt="Soup" />
            <MenuImg src={morotssoppa} alt="Soup" />
            <MenuHead>Fisk och skaldjur</MenuHead>
            <MenuImg src={skaldjurssoppa} alt="Soup" />
            <MenuImg src={laxsoppa} alt="Soup" />

        </MenuContainer>
    );
}

export default Menu;