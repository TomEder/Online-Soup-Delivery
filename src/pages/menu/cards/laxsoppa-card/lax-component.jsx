import React from 'react';
import { MenuImg, CardContainer, CardTitle, CardOptions, CardInfo, CardAdd, CardTitleText, CardText } from '../../menu.styles';
import lax from './laxSoppa.png';

const LaxCard = () => {
    return (
        <CardContainer>
            <CardTitle className="cardTitle">
                <CardTitleText>Laxssoppa</CardTitleText>
                <CardText>Med morot, dill och ärtor</CardText>
            </CardTitle>
            <CardOptions>
                <CardInfo>
                    <CardText>Info</CardText>
                </CardInfo>
                <CardAdd>
                    <CardText>Lägg till</CardText>
                </CardAdd>
            </CardOptions>
            <MenuImg src={lax} alt="Soup" />
        </CardContainer>
    );
}

export default LaxCard;