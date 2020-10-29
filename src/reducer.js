export const initial_state = {
    itemsInCart: 0,
    cart: []
};

export const reducer = (state, action) => {
    const createHash = () => {
        return Date.now();
    };
    switch (action.type) {
        case "add": {
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
        case "remove": {
            const prevState = [...state.cart];
            const nextState = prevState.filter(
                (item) => item.itemID !== action.payload
            );

            return {
                itemsInCart: state.itemsInCart - 1,
                cart: [...nextState]
            };
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
