import React, { createContext, useContext, useReducer } from 'react';


const CartStateContext = createContext();
const CartDispatchContext = createContext();


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const { id, name, price, img, Qty, Size } = action;
      const itemIndex = state.findIndex(item => item.id === id && item.Size === Size);

      if (itemIndex >= 0) {
      
        return state.map((item, index) =>
          index === itemIndex ? { ...item, Qty: item.Qty + Qty } : item
        );
      } else {
        
        return [...state, { id, name, price, img, Qty, Size }];
      }
    }
    case 'REMOVE': {
    
      return state.filter((_, index) => index !== action.index);
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
