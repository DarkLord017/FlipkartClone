import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_CART_ERROR } from '../constants/cartConstant';
const url = 'http://localhost:8000';

export const AddToCart = (id, qty) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({
            type: ADD_TO_CART, payload: {
                ...data,
                qty
            }
        })
    } catch (error) {
        dispatch({ type: ADD_TO_CART_ERROR, payload: error })
    }
}

export const RemoveFromCart = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART, payload: id
    });
}