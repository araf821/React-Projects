import React, { useContext, useReducer, useEffect } from "react";
import cartItems from "../data";
import {
  CLEAR_LIST,
  REMOVE_ITEM,
  ITEM_INCREASE,
  ITEM_DECREASE,
  GET_TOTAL,
} from "./actions";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialStates = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  const clearCart = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, id });
  };

  const itemIncrease = (id) => {
    dispatch({ type: ITEM_INCREASE, id });
  };

  const itemDecrease = (id) => {
    dispatch({ type: ITEM_DECREASE, id });
  };

  useEffect(() => {
    dispatch({ type: GET_TOTAL });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, itemIncrease, itemDecrease }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
