import ProductServices from "../../pages/services/productServices";
import { CATEGORIES, PAGINATE, PRODUCT_DETAIL, PRODUCT_SHOP, REMOVE_FROM_WIDHLIST } from "../type";

export const fetchProductDetail = (slug) => {
    return async(dispatch) => {
        let dataDetail = await ProductServices.productDetail(slug);
        if (dataDetail.data.length > 0) {
            dispatch({
                type: PRODUCT_DETAIL,
                payload: dataDetail.data[0],
            });
        }
    };
};

export const fetchCategories = () => {
    return async(dispatch) => {
        let dataCategory = await ProductServices.category();
        if (dataCategory) {
            dispatch({
                type: CATEGORIES,
                payload: dataCategory,
            });
        }
    };
};

export const fetchProductShopPaginate = (queryUrl) => {
    return async(dispatch) => {
        let data = await ProductServices.product(queryUrl);
        if (data) {
            dispatch({ type: PRODUCT_SHOP, payload: data.data });
            dispatch({ type: PAGINATE, payload: data });
        }
    };
};

export function removeWidhList(id) {
    return {
        type: REMOVE_FROM_WIDHLIST,
        payload: id,
    };
}