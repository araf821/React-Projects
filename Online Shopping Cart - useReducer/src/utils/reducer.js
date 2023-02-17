import {
  CLEAR_LIST,
  ITEM_DECREASE,
  ITEM_INCREASE,
  REMOVE_ITEM,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE_ITEM) {
    const newList = state.cart.filter((item) => item.id !== action.id);
    return { ...state, cart: newList };
  }
  if (action.type === ITEM_INCREASE) {
    const newList = state.cart.map((item) => {
      if (item.id === action.id) {
        item.amount++;
      }
      return item;
    });
    return { ...state, cart: newList };
  }
  if (action.type === ITEM_DECREASE) {
    const newList = state.cart.map((item) => {
        if (item.id === action.id) {
          item.amount--;
        }
        return item;
      });
      return { ...state, cart: newList };
  }
  return state;
};
export default reducer;
