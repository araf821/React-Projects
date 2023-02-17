import { CLEAR_LIST, REMOVE_ITEM } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE_ITEM) {
    const newList = state.cart.filter((item) => item.id !== action.id);
    return { ...state, cart: newList };
  }
  return state;
};
export default reducer;
