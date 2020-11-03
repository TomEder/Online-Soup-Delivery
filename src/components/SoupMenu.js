import React from "react";
import { Link } from "react-router-dom";




const SoupMenu = ({ soup }) => {
    const { name, price, ingredients, image } = soup;

    return (
        <div

        >
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h4>{price}:-</h4>
            <h4>Med {ingredients}</h4>

            <div>
                <Link to={`/soups/${soup.id}`}>
                    Info
                    </Link>
            </div>
        </div>
    );
};

export default SoupMenu;
