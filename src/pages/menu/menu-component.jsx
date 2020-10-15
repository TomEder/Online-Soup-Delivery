import React from 'react';
import { MenuHead, MenuContainer } from './menu.styles';


import RamenCard from '../menu/cards/ramen-card/ramen-card';
import KottsoppaCard from '../menu/cards/kottsoppa-card/kottsoppa-card';
import ToscanaCard from '../menu/cards/toscana-card/toscana-component';
import GulaschCard from '../menu/cards/gulasch-card/gulasch-component';
import MajsCard from '../menu/cards/majssoppa-card/majssoppa-component';
import MorotsCard from '../menu/cards/morotssoppa-card/morotssoppa-component';
import SkaldjursCard from './cards/skaldjurssoppa-card/skaldjur-component';
import LaxCard from './cards/laxsoppa-card/lax-component'

const Menu = () => {
    return (
        <MenuContainer>
            <MenuHead>Kött eller kyckling</MenuHead>
            <RamenCard />
            <KottsoppaCard />
            <MenuHead>Vegetariska</MenuHead>
            <ToscanaCard />
            <GulaschCard />
            <MajsCard />
            <MorotsCard />
            <MenuHead>Fisk och skaldjur</MenuHead>
            <SkaldjursCard />
            <LaxCard />

        </MenuContainer>
    );
}

export default Menu;