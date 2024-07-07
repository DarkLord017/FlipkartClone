import axios from 'axios';
import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from '../constants/productConstant';

export const getProducts = () => async (dispatch) => {
    try {

        const response = await axios.get('http://localhost:8000/products')
        console.log(response.data)

        dispatch({
            type: 'success',
            payload: response.data
        })

    } catch {
        dispatch({
            type: 'error',
            payload: 'error'
        })

    }

}

export const getProductDetails = (id) => async (dispatch) => {
    try {

        dispatch({
            type: GET_PRODUCTS

        })

        const response = await axios.get(`http://localhost:8000/product/${id}`)

        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: response.data
        })


    } catch {
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: 'error'
        })

    }

}


