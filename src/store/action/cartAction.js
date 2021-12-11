import { useHistory } from "react-router";
import CartServices from "../../pages/services/cartServices";
import { DECREASE_NUMBER_CART, INCREASE_NUMBER_CART, REMOVE_FROM_CART, CLEAR_CART } from "../type";


export function removeCart(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    };
}
export function decrease(id) {
    return {
        type: DECREASE_NUMBER_CART,
        payload: id
    }
}
export function increase(id) {
    return {
        type: INCREASE_NUMBER_CART,
        payload: id
    }
}