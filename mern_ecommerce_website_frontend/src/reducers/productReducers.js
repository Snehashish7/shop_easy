/*this is going to handle the state of the products on the homepage.
A reducer takes two things:
1) state: the initial state of the product 
2) action: contains types upon which we will take decisions. 
        It can also have a payload with those products in it that we fetch from the server
*/
// //we do not want to keep the req, succ, fail as strings rather we want them as CONSTANTS

// export const productListReducer = (state = { products: [] }, action) => {
//     switch (action.type) {
//         case 'PRODUCT_LIST_REQUEST': /*the action type of product is 'request' ->we want 
//         the component to know that the server is currently fetching and return the new product state */
//             return { loading: true, products: [] }
//         case 'PRODUCT_LIST_SUCCESS':
//             return { loading: false, products: action.payload }//send new product state with action's payload
//         case 'PRODUCT_LIST_FAIL':
//             return { loading: false, error: action.payload }//send error with action's payload
//         default:
//             return state //if not anything then return original(or initial) state
//     }

// 
import {
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST: /*the action type of product is 'request' ->we want 
        the component to know that the server is currently fetching and return the new product state */
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }//products = action's payload from productActions
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload}//error = action's payload from productActions
        default:
            return state //if not anything then return original(or initial) state
    }

}
//Set product to a object rather than array(it contains an array of reviews)
export const productDetailsReducer = (state = { product: {Reviews:[]} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST: 
            return { loading: true, ...state }// using the spread op(...) to keep the state in current state
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }//whenever we create a new reducer then we have to add it to the store

}

