import { api } from "./config";

const ProductServices = {

    product(queryUrl) {
        return fetch(`${api}/product?${queryUrl || ""}`).then(
            (res) => res.json()
        );
    },
    productHome() {
        return fetch(`${api}/product`).then((res) => res.json());
    },
    productDetail(slug) {
        return fetch(`${api}/product?slug=${slug}`).then((res) => {
            return res.json();
        });
    },
    category() {
        return fetch(`${api}/categories`).then((res) => res.json());
    },
};
export default ProductServices;