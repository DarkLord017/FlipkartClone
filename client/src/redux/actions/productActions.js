import axios from 'axios';

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


