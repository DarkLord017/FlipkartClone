export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'addToCart':
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.id === item.id);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(data => data.product === existItem.product ? item : data)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case 'removeFromCart':
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.id !== action.payload)
            }
        case 'addToCartError':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}