import React from 'react';
import { LandingContainer, LandingHead, SoupImg, WaveImg, WaveContainer, ToSoup, ArrowBtn, ArrowImg } from './landing.styles';
import Arrow from './down-arrow.png';
import Wave from './Rectangle-69.png';
import soupLanding from './Soup-landing.png';

function Landing() {
    return (
        <LandingContainer>
            <LandingHead>Online Soup Delivery</LandingHead>
            <SoupImg className='soupLanding' src={soupLanding} alt="Soup" />



            <ToSoup>Till sopporna</ToSoup>
            <ArrowBtn>
                <ArrowImg className='button' src={Arrow} alt='Till sopporna' />
            </ArrowBtn>
            <WaveImg className='wave' src={Wave} alt='Wave' />





        </LandingContainer>
    );
}

export default Landing;