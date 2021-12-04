import {
  ADD_TO_CART,
  CLOSE_MODAL,
  OPEN_MODAL_CART,
  REMOVE_FROM_CART,
} from "../type";

const listCart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = listCart.length;
const totalPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0;
const cartInitial = {
  listCart: listCart,
  openShow: false,
  cartCount: cartCount,
  totalPrice: totalPrice,
};

const cartReducer = (state = cartInitial, action) => {
  let { listCart, totalPrice, cartCount } = state;

  switch (action.type) {
    case ADD_TO_CART:
      const index = listCart.findIndex((item) => item.id === action.payload.id);
      if (index == -1) {
        listCart.push(action.payload);
        action.payload.number = action.payload.number || 1;
        action.payload.number = action.payload.cartCount || 1;
        totalPrice = totalPrice + action.payload.price * action.payload.number;
      } else {
        if (listCart[index].number) {
          listCart[index].number = listCart[index].number + 1;
          action.payload.number = action.payload.cartCount || 1;
          totalPrice =
            totalPrice + action.payload.price * action.payload.number;
        } else {
          listCart[index].number = 2;
        }
      }
      localStorage.setItem("cart", JSON.stringify(listCart));
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));

      return {
        ...state,
        listCart,
        cartCount: cartCount + action.payload.number,
        totalPrice,
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
