import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers';
import thunk from 'redux-thunk'



const reducer = combineReducers({
  productList: productListReducer, //this will show as a part of the state
  productDetails: productDetailsReducer,
  cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
const initialState = {
  cart: { cartItems: cartItemsFromStorage, },
}

const preloadedState = {}

const store = configureStore({
  reducer,
  initialState,
  preloadedState,
  middleware: [thunk],
})

export default store