export const initial_state = {
    itemsInCart: 0,
    cart: [],
    user: {
        firstName: "",
        lastName: "",
        address: "",
        zipCode: "",
        city: "",
        phone: "",
        email: "",
        instructions: "",
    }
};

export const reducer = (state, action) => {
    const createHash = () => {
        return Date.now();
    };
    switch (action.type) {
        case "addToCart": {
            return {
                itemsInCart: state.itemsInCart + 1,
                cart: [
                    ...state.cart,
                    {
                        itemID: createHash(),
                        ...action.payload
                    }
                ]
            };
        }
        case "removeFromCart": {
            const prevState = [...state.cart];
            const nextState = prevState.filter(
                (item) => item.itemID !== action.payload
            );

            return {
                itemsInCart: state.itemsInCart - 1,
                cart: [...nextState]
            };
        }
        case "updateUserData": {
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                }
            }
        }
        case "clear": {
            return {
                ...initial_state
            };
        }
        default: {
            console.error("Action type not valid");
            return state;
        }
    }
};
