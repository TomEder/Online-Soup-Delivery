
import React from "react";

import Soup from "../../components/soup";
import SoupLanding from '../../images/Soup-landing.png'
import wave from '../../images/Rectangle-69.png'

import { soups } from "../../SoupData";

const Home = () => {
    return (
        <div>
            <h1>Online Soup Delivery</h1>
            <img src={SoupLanding} alt="" />
            <img src={wave} alt="" />

            <h3>Kött och kyckling</h3>

            <div>
                {soups.map((soup, i) => (
                    <Soup key={soup.id + i} soup={soup} />
                ))}
            </div>
        </div >
    );
};

export default Home;

































/* import React from 'react';
import { MenuHead, MenuContainer } from './menu.styles';


import RamenCard from './cards/ramen-card/ramen-card';
import KottsoppaCard from './cards/kottsoppa-card/kottsoppa-card';
import ToscanaCard from './cards/toscana-card/toscana-component';
import GulaschCard from './cards/gulasch-card/gulasch-component';
import MajsCard from './cards/majssoppa-card/majssoppa-component';
import MorotsCard from './cards/morotssoppa-card/morotssoppa-component';
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

export default Menu; */