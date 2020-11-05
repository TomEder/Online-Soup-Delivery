import React from "react";
import { Link, useParams } from "react-router-dom";
import { InfoImage, InfoContainer, InfoText, InfoName, InfoType, InfoList, AddButton, InfoBack } from './soupinfo.styles';
import Navbar from "../../components/navbar";

import { soups } from "../../SoupData";

const SoupInfo = ({ store }) => {
    let { id } = useParams();
    const soup = soups.find((soup) => soup.id === +id);

    const { dispatch } = React.useContext(store);

    return (
        <InfoContainer>
            <InfoImage src={soup.infoimage} alt="" />
            <InfoText>
                <InfoBack><Link to="/" style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}>
                    Meny
                </Link>
                </InfoBack>
                {soup ? (
                    <div>
                        <InfoName>{soup && soup.name}</InfoName>
                        <InfoType>{soup && soup.type}</InfoType>
                        <InfoList>
                            {soup.ingredients.map((ing, i) => (
                                <li key={ing + i}>{ing}</li>
                            ))}
                        </InfoList>
                        <InfoList>
                            {soup.nutrients.map((nut) => (
                                <li key={nut.name} style={{ textTransform: "capitalize" }}>
                                    {nut.name}: <strong>{nut.value}</strong> {nut.unit}
                                </li>
                            ))}
                        </InfoList>
                        <Navbar style={{ position: "fixed", width: "30px", Zindex: "3", left: "345px", bottom: "100px" }} />
                        <AddButton
                            onClick={() => dispatch({ type: "addToCart", payload: soup })}
                            name="addToCart"
                        >
                            Lägg till i korgen
          </AddButton>

                    </div>
                ) : (
                        <h2>Den soppan finns inte!</h2>
                    )}
            </InfoText>
        </InfoContainer>
    );
};

export default SoupInfo;
