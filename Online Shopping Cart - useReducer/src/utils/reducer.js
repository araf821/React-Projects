import { CLEAR_LIST, REMOVE_ITEM } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, cart: [] };
  }
  return state
};
export default reducer;
