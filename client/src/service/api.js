import axios from 'axios';

export const authenticateSignUp = async (userData) => {
    try {
        console.log(userData)
        return await axios.post('http://localhost:8000/signup', userData); // Use the correct protocol and URL

    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Server responded with an error:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up request:', error.message);
        }
    }
};

export const authenticateLogIn = async (userData) => {
    try {
        console.log(userData)
        return await axios.post('http://localhost:8000/login', userData); // Use the correct protocol and URL

    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Server responded with an error:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up request:', error.message);
        }
    }
};