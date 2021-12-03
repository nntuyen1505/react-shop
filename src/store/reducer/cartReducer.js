import { findAllInRenderedTree } from "react-dom/test-utils";
import { ADD_TO_CART, CLOSE_MODAL, OPEN_MODAL_CART } from "../type";

const cartInitial = {
  listcart: JSON.parse(localStorage.getItem("cart")) || [],
  openShow: false,
};

const cartReducer = (state = cartInitial, action) => {
  let { listcart } = state;

  switch (action.type) {
    case ADD_TO_CART:
      const index = listcart.findIndex((item) => item.id === action.payload.id);
      if (index == -1) {
        listcart.push(action.payload);
      } else {
        if (listcart[index].number) {
          listcart[index].number = listcart[index].number + 1 || 1;
        } else {
          listcart[index].number = 2;
        }
      }
      localStorage.setItem("cart", JSON.stringify(listcart));

      return {
        ...state,
        listcart,
      };

    case OPEN_MODAL_CART:
      return {
        ...state,
        openShow: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        openShow: false,
      };
  }
  return state;
};

export default cartReducer;
