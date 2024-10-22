import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../FeatureSlice/CartSlice'; 
import FilterSlice from '../FeatureSlice/FilterSlice';
export const store = configureStore({
    reducer: {
        cart: CartReducer,
        Filter: FilterSlice
    }
})