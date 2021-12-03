import {
  CATEGORIES,
  CLOSE_MODAL,
  OPEN_PRODUCT_MODAL,
  PAGINATE,
  PRODUCT_DETAIL,
  PRODUCT_SHOP,
} from "../type";

const productReducerInitial = {
  data: {},
  dataCategory: [],
  dataProduct: [],
  dataPaginate: {},
  loading: true,
  openProductModal: false,
  productModal: [],
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
  }
  return state;
};
export default productReducer;
