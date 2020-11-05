import React from 'react';
import { Link } from 'react-router-dom';
import { AddressInput, AddressContainer, AddContinue, AddBack, AddressHead } from './addressform.styles';

const initialFormData = ({
    firstName: "",
    lastName: "",
    address: "",
    zipCode: "",
    city: "",
    phone: "",
    email: "",
    instructions: "",
});

const AddressForm = ({ store }) => {
    const { state, dispatch } = React.useContext(store);
    const [inputs, setInputs] = React.useState(initialFormData);

    const handleChange = (e) => {
        setInputs({
            ...inputs,

            [e.target.name]: e.target.value.trim()
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "updateUserData", payload: inputs })
    };

    return (
        <AddressContainer>
            <AddBack><Link to="/" style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}>
                Meny
            </Link>
            </AddBack>
            <AddressHead>Var ska soppan?</AddressHead>
            <form action="">
                <AddressInput name="firstName" value={inputs.name} onChange={handleChange} placeholder="Förnamn" />
                <AddressInput name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Efternamn" />
                <AddressInput name="address" value={inputs.address} onChange={handleChange} placeholder="Gatuadress" />
                <AddressInput name="zipCode" value={inputs.zipCode} onChange={handleChange} placeholder="Postnummer" />
                <AddressInput name="city" value={inputs.city} onChange={handleChange} placeholder="Ort" />
                <AddressInput name="phone" value={inputs.phone} onChange={handleChange} placeholder="Telefonnummer" />
                <AddressInput name="email" value={inputs.email} onChange={handleChange} placeholder="E-post" />
                <AddressInput name="instructions" value={inputs.instructions} onChange={handleChange} placeholder="Våning/Portkod/instruktioner" />
                <AddContinue onClick={handleSubmit}>
                    <Link to={'/payment'} style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}>
                        Vidare
                    </Link>
                </AddContinue>
            </form>

        </AddressContainer>
    );
}

export default AddressForm;

