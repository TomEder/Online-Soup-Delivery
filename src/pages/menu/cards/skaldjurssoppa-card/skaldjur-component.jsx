import React from 'react';
import { MenuImg, CardContainer, CardTitle, CardOptions, CardInfo, CardAdd, CardTitleText, CardText } from '../../menu.styles';
import skaldjur from './skaldjurssoppa.png';

const SkaldjursCard = () => {
    return (
        <CardContainer>
            <CardTitle className="cardTitle">
                <CardTitleText>Skaldjurssoppa</CardTitleText>
                <CardText>Med blåmusslor, havskräftor, räkor och torsk</CardText>
            </CardTitle>
            <CardOptions>
                <CardInfo>
                    <CardText>Info</CardText>
                </CardInfo>
                <CardAdd>
                    <CardText>Lägg till</CardText>
                </CardAdd>
            </CardOptions>
            <MenuImg src={skaldjur} alt="Soup" />
        </CardContainer>
    );
}

export default SkaldjursCard;