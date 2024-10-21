import { createSlice } from '@reduxjs/toolkit';
import { useReducer } from 'react';


const initialState = { Cart: [] }

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddToCart : (state, action) => {
            const checkItemsPresentedOrNot = state.Cart.find((item) => item.id === action.payload.id);
            if (checkItemsPresentedOrNot) {
                checkItemsPresentedOrNot.Qty += action.payload.Qty;
            } else {
                state.Cart.push(action.payload);
            }
        },
        RemoveItems: (state, action) => {
            state.Cart = state.Cart.filter((item) => item.id !== action.payload.id);
        },
        ClearCart: (state) => {
            state.Cart = [];
        }
    }
})
export const { AddToCart, RemoveItems, ClearCart } = CartSlice.actions;
export default CartSlice.reducer;
export const useCart = () => {
    return useReducer(CartSlice.reducer, initialState);
};