

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

export const GetProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case 'getProductDetailsRequest':
            return {
                ...state,
                loading: true
            }
        case 'getProductDetailsSuccess':
            return {
                loading: false,
                product: action.payload
            }
        case 'getProductDetailsFail':
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}