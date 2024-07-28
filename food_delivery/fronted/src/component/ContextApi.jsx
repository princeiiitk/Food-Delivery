import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const itemIndex = state.findIndex(item => item.id === action.id && item.Size === action.Size);
      if (itemIndex >= 0) {
        const newState = state.map((item, index) =>
          index === itemIndex ? { ...item, Qty: item.Qty + action.Qty } : item
        );
        return newState;
      } else {
        return [...state, { id: action.id, name: action.name, price: action.price, img: action.img, Qty: action.Qty, Size: action.Size }];
      }
    }
    case 'REMOVE': {
      return state.filter((item, index) => index !== action.index);
    }
    case 'DROP': {
      return [];
    }
    default: {
      console.error(`Unknown action type: ${action.type}`);
      return state;
    }
  }
};

export const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a ContextApi');
  }
  return context;
};

export const useDispatchCart = () => {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useDispatchCart must be used within a ContextApi');
  }
  return context;
};
