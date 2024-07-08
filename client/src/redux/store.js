import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { productReducer, GetProductDetailsReducer } from './reducers/ProductReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    getProducts: productReducer,
    getProductDetails: GetProductDetailsReducer,
    cart: cartReducer
});


const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;