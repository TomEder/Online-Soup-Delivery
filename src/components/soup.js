import React from "react";
import { Link } from "react-router-dom";



const Soup = ({ soup }) => {
    const { name, price, ingredients, image } = soup;
    return (
        <div
            style={{ border: "1px solid grey", maxWidth: "375px", padding: "1rem" }}
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
            <div>
            </div>
        </div>
    );
};

export default Soup;
