import {
    ADD_TO_CART,
    ALL_ORDER,
    CLEAR_CART,
    CLOSE_MODAL,
    CREATE_CART,
    DECREASE_NUMBER_CART,
    INCREASE_NUMBER_CART,
    OPEN_MODAL_CART,
    ORDER,
    ORDER_CART,
    REMOVE_FROM_CART,
} from "../type";

const listCart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = listCart.length;
const totalPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0;
const cartInitial = {
    listCart: listCart,
    cartCount: cartCount,
    totalPrice: totalPrice,
    orderCart: JSON.parse(localStorage.getItem("orderCart")) || {},
    allOrder: JSON.parse(localStorage.getItem("allOrder")) || {},
    loading: true,
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

        case REMOVE_FROM_CART:
            {
                let { listCart, totalPrice, cartCount } = state;
                const index = listCart.findIndex((e) => e.id === action.payload);
                totalPrice = totalPrice - listCart[index].price * listCart[index].number;
                cartCount = cartCount - listCart[index].number;
                if (index >= 0) {
                    listCart.splice(index, 1);
                }
                localStorage.setItem("cart", JSON.stringify(listCart));
                localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
                return {
                    ...state,
                    cartCount,
                    listCart,
                    totalPrice,
                };
            }

        case DECREASE_NUMBER_CART:
            {
                let { listCart, cartCount, totalPrice } = state;
                const index = listCart.findIndex((e) => e.id === action.payload);
                if (index >= 0) {
                    listCart[index].number--;
                    totalPrice = totalPrice - listCart[index].price;
                    if (listCart[index].number == 0) {
                        listCart.splice(index, 1);
                    }
                }
                localStorage.setItem("cart", JSON.stringify(listCart));
                localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
                return {
                    ...state,
                    listCart,
                    cartCount: cartCount - 1,
                    totalPrice,
                };
            }

        case INCREASE_NUMBER_CART:
            {
                let { listCart, cartCount, totalPrice } = state;
                const index = listCart.findIndex((e) => e.id === action.payload);
                if (index >= 0) {
                    listCart[index].number++;
                    totalPrice = totalPrice + listCart[index].price;
                }
                localStorage.setItem("cart", JSON.stringify(listCart));
                localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
                return {
                    ...state,
                    listCart,
                    cartCount: cartCount + 1,
                    totalPrice,
                };
            }

        case CLEAR_CART:
            {
                let { listCart, cartCount, totalPrice } = state;
                listCart = [];
                cartCount = 0;
                totalPrice = 0;
                localStorage.removeItem("cart");
                localStorage.removeItem("totalPrice");
                return {
                    ...state,
                    listCart,
                    cartCount,
                    totalPrice,
                };
            }

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
        case ORDER_CART:
            {
                let { orderCart } = state
                localStorage.setItem("orderCart", JSON.stringify(action.payload));
                localStorage.setItem("allOrder", JSON.stringify(action.payload));
                return {
                    ...state,
                    orderCart: action.payload,
                };
            }
            // case ALL_ORDER:
            //     {
            //         let { allOrder } = state
            //         localStorage.setItem("allOrder", JSON.stringify(action.payload));
            //         return {
            //             ...state,
            //             allOrder: action.payload,
            //             loading: false
            //         };
            //     }
    }
    return state;
};

export default cartReducer;