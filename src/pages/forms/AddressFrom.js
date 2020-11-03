import React from 'react';
import { Link } from 'react-router-dom';


const initialFormData = Object.freeze({
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
        <div>
            <Link to="/">
                <h4>{"<"} Back</h4>
            </Link>
            <h1>Var ska soppan?</h1>
            <form action="">
                <input name="firstName" value={inputs.name} onChange={handleChange} />
                <input name="lastName" value={inputs.lastName} onChange={handleChange} />
                <input name="address" value={inputs.address} onChange={handleChange} />
                <input name="zipCode" value={inputs.zipCode} onChange={handleChange} />
                <input name="city" value={inputs.city} onChange={handleChange} />
                <input name="phone" value={inputs.phone} onChange={handleChange} />
                <input name="email" value={inputs.email} onChange={handleChange} />
                <input name="instructions" value={inputs.instructions} onChange={handleChange} />
                <button onClick={handleSubmit}>
                    <Link to={'/payment'}>
                        Vidare
                    </Link>
                </button>
            </form>

        </div>
    );
}

export default AddressForm;

