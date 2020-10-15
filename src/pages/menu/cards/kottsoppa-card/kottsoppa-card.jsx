import React from 'react';
import { MenuImg, CardContainer, CardTitle, CardOptions, CardInfo, CardAdd, CardTitleText, CardText } from '../../menu.styles';
import kottsoppa from './kottsoppa.png';

const KottsoppaCard = () => {
    return (
        <CardContainer>
            <CardTitle className="cardTitle">
                <CardTitleText>Köttsoppa</CardTitleText>
                <CardText>Med rotfrukter och vitkål</CardText>
            </CardTitle>
            <CardOptions>
                <CardInfo>
                    <CardText>Info</CardText>
                </CardInfo>
                <CardAdd>
                    <CardText>Lägg till</CardText>
                </CardAdd>
            </CardOptions>
            <MenuImg src={kottsoppa} alt="Soup" />
        </CardContainer>
    );
}

export default KottsoppaCard;