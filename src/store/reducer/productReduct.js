import { WishList } from "../../pages/Account/components/WishList";
import {
    CATEGORIES,
    CLOSE_MODAL,
    OPEN_PRODUCT_MODAL,
    PAGINATE,
    PRODUCT_DETAIL,
    PRODUCT_SHOP,
    REMOVE_FROM_WIDHLIST,
    WIDH_LIST,
} from "../type";

const productReducerInitial = {
    data: {},
    dataCategory: [],
    dataProduct: [],
    dataPaginate: {},
    loading: true,
    openProductModal: false,
    productModal: [],
    widhlist: JSON.parse(localStorage.getItem("widhlist")) || [],
};

const productReducer = (state = productReducerInitial, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case CATEGORIES:
            return {
                ...state,
                dataCategory: action.payload,
            };
        case PRODUCT_SHOP:
            return {
                ...state,
                dataProduct: action.payload,
            };
        case PAGINATE:
            return {
                ...state,
                dataPaginate: action.payload,
            };
        case OPEN_PRODUCT_MODAL:
            return {
                ...state,
                openProductModal: true,
                productModal: action.payload,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                openProductModal: false,
            };

        case WIDH_LIST:
            {
                let { widhlist } = state
                const index = widhlist.findIndex((item) => item.id === action.payload.id)

                if (index == -1) {
                    widhlist.push(action.payload);
                } else {

                }

                localStorage.setItem("widhlist", JSON.stringify(widhlist));
                return {
                    ...state,
                    widhlist,
                };
            }

        case REMOVE_FROM_WIDHLIST:
            {
                let { widhlist } = state
                const index = widhlist.findIndex((e) => e.id === action.payload)
                if (index >= 0) {
                    widhlist.splice(index, 1);
                }
                localStorage.setItem("widhlist", JSON.stringify(widhlist));
                return {
                    ...state,
                    widhlist
                }
            }


        default:
            return state;
    }
};
export default productReducer;