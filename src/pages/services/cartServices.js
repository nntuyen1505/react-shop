import { api, handleResponse } from "./config"

const CartServices = {
    create(res) {
        let token = JSON.parse(localStorage.getItem("token"))?.accessToken;
        const urlCreate = `${api}/ecommerce/v1/cart`
        const optionCreate = {
            method: "POST",
            body: JSON.stringify(res),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        return fetch(urlCreate, optionCreate).then((res) => handleResponse(res, urlCreate, optionCreate))
    },

    order(data) {
        let token = JSON.parse(localStorage.getItem("token"))?.accessToken;
        const urlCreate = `${api}/ecommerce/v1/order`
        const optionCreate = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        return fetch(urlCreate, optionCreate).then((res) => handleResponse(res, urlCreate, optionCreate))
    },

    orderDetail(id) {
        let token = JSON.parse(localStorage.getItem("token"))?.accessToken;
        const url = `${api}/ecommerce/v1/order/${id}`
        const option = {
            method: "GET",
            header: {
                "Content-Type": "application/json",
                Authorization: `Bearer  ${token}`
            }
        }
        return fetch(url, option).then((res) => handleResponse(res, url, option))
    },

    allOrder(id) {
        const token = JSON.parse(localStorage.getItem("token"))?.accessToken;
        const url = `${api}/ecommerce/v1/order/${id}`
        const option = {
            method: "GET",
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        return fetch(url, option).then((res) => handleResponse(res, url, option));
    }
}

export default CartServices