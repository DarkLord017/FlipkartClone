import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { productReducer, GetProductDetailsReducer } from './reducers/ProductReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    getProducts: productReducer,
    getProductDetails: GetProductDetailsReducer

});


const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;