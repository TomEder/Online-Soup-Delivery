import React from "react";
import { Link, useParams } from "react-router-dom";

import { soups } from "../../SoupData";

const SoupInfo = ({ store }) => {
    let { id } = useParams();
    const soup = soups.find((soup) => soup.id === +id);

    const { dispatch } = React.useContext(store);

    return (
        <div>
            <Link to="/">
                <h4>{"<"} Back</h4>
            </Link>
            {soup ? (
                <div>
                    <h1>{soup && soup.name}</h1>
                    <h3>{soup && soup.type}</h3>
                    <ul>
                        {soup.ingredients.map((ing, i) => (
                            <li key={ing + i}>{ing}</li>
                        ))}
                    </ul>
                    <ul>
                        {soup.nutrients.map((nut) => (
                            <li key={nut.name} style={{ textTransform: "capitalize" }}>
                                {nut.name}: <strong>{nut.value}</strong> {nut.unit}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => dispatch({ type: "addToCart", payload: soup })}
                        name="addToCart"
                    >
                        Lägg till i korgen
          </button>

                </div>
            ) : (
                    <h2>Välj en rimlig soppa din jävel</h2>
                )}
        </div>
    );
};

export default SoupInfo;
