

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'success':
            console.log("okay")
            return {
                ...state,
                products: action.payload
            }
        case 'error':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}