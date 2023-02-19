import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'
import axios from 'axios'
/*Axios works by making HTTP requests with NodeJS and XMLHttpRequests on the browser. If 
the request was successful, you will receive a response with the data requested.If the 
request failed, you will get an error. */

export const listProducts = () => async (dispatch) => {   //thunk helps us create func within func
    //using 'dispatch' we pass the actions related to the productConstants
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })  //we dispatch request first to reducers
        const { data } = await axios.get('/api/products') //if error go to catch else continue with nxt line
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data   //passes the data to actions.payload of productReducers.js
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
        //"error.resonse.data.message" this the custom error message that we created in the middleware
    }
}

export const listProductDetails = (id) => async (dispatch) => {  
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })  
        const { data } = await axios.get(`/api/products/${id}`) 
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data   //passes the single product data to actions.payload of productReducers.js
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
        //"error.resonse.data.message" this the custom error message that we created in the middleware
    }
}


//in our HomeScreen we will fire-off this('listProducts') action.