import React from 'react';
import { MenuImg, CardContainer, CardTitle, CardOptions, CardInfo, CardAdd, CardTitleText, CardText } from '../../menu.styles';
import ramen from './ramen.png';

const RamenCard = () => {
    return (
        <CardContainer>
            <CardTitle className="cardTitle">
                <CardTitleText>Ramen</CardTitleText>
                <CardText>Med kyckling, ägg, majs, persilja</CardText>
            </CardTitle>
            <CardOptions>
                <CardInfo>
                    <CardText>Info</CardText>
                </CardInfo>
                <CardAdd>
                    <CardText>Lägg till</CardText>
                </CardAdd>
            </CardOptions>
            <MenuImg src={ramen} alt="Soup" />
        </CardContainer>
    );
}

export default RamenCard;