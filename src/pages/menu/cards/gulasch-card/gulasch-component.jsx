import React from 'react';
import { MenuImg, CardContainer, CardTitle, CardOptions, CardInfo, CardAdd, CardTitleText, CardText } from '../../menu.styles';
import gulasch from './gulasch.png';

const GulaschCard = () => {
    return (
        <CardContainer>
            <CardTitle className="cardTitle">
                <CardTitleText>Gulasch</CardTitleText>
                <CardText>Med bönor, potatis, paprika, lök</CardText>
            </CardTitle>
            <CardOptions>
                <CardInfo>
                    <CardText>Info</CardText>
                </CardInfo>
                <CardAdd>
                    <CardText>Lägg till</CardText>
                </CardAdd>
            </CardOptions>
            <MenuImg src={gulasch} alt="Soup" />
        </CardContainer>
    );
}

export default GulaschCard;