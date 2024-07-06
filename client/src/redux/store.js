import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { productReducer } from './reducers/ProductReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    getProducts: productReducer,

});


const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;