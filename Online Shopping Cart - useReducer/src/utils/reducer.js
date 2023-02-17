import {
  CLEAR_LIST,
  GET_TOTAL,
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
        if (item.amount !== 1) {
          item.amount--;
        }
      }
      return item;
    });

    return { ...state, cart: newList };
  }

  if (action.type === GET_TOTAL) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    return { ...state, total, amount };
  }

  return state;
};
export default reducer;
