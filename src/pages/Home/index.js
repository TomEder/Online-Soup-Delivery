
import React from "react";
import { HomeContainer, Logo, Wave, MenuHead, HeaderText, LandingHead, ToSoup, ArrowImg } from './home.styles';

import Soup from "../../components/SoupMenu";
import SoupLanding from '../../images/Soup-landing.png'
import wave from '../../images/Rectangle-69.png'
import Navbar from '../../components/navbar';
import { soups } from "../../SoupData";
import arrow from '../../images/Arrow.png'

const Home = () => {
    return (
        <HomeContainer>
            <LandingHead>Online Soup <br /> Delivery</LandingHead>
            <Logo src={SoupLanding} alt="" />
            <Wave src={wave} alt="" />
            <ToSoup>Till sopporna</ToSoup>
            <ArrowImg src={arrow} alt="" />
            <Navbar style={{ position: "fixed" }} />
            <MenuHead>
                <HeaderText>Meny</HeaderText>
            </MenuHead>

            <div>
                {soups.map((soup, i) => (
                    <Soup key={soup.id + i} soup={soup} />
                ))}
            </div>
        </HomeContainer >
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