import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../FeatureSlice/CartSlice'; 
export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})