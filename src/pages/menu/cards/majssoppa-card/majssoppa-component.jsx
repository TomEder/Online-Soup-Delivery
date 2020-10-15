import React from 'react';
import { MenuImg, CardContainer, CardTitle, CardOptions, CardInfo, CardAdd, CardTitleText, CardText } from '../../menu.styles';
import majs from './majssoppa.png';

const MajsCard = () => {
    return (
        <CardContainer>
            <CardTitle className="cardTitle">
                <CardTitleText>Rostad majssoppa</CardTitleText>
                <CardText>Med quesadillas</CardText>
            </CardTitle>
            <CardOptions>
                <CardInfo>
                    <CardText>Info</CardText>
                </CardInfo>
                <CardAdd>
                    <CardText>Lägg till</CardText>
                </CardAdd>
            </CardOptions>
            <MenuImg src={majs} alt="Soup" />
        </CardContainer>
    );
}

export default MajsCard;