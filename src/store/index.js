import { applyMiddleware, combineReducers, createStore } from "redux"
import authReducer from "./reducer/authReducer"
import cartReducer from "./reducer/cartReducer";
import productReducer from "./reducer/productReduct";
import searchReducer from "./reducer/searchReducer";
import sizeReducer from "./reducer/sizeReducer";

const allReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    search: searchReducer,
    size: sizeReducer,
})

const thunk = store => next => action => {
    if (typeof action === 'function') {
        action(store.dispatch)
    } else {
        next(action)
    }
};

const store = createStore(
    allReducer,
    applyMiddleware(thunk)
)
export default store