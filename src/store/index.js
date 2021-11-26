import { createStore, combineReducers, applyMiddleware } from "redux";
import btnHeaderReducer from "./reducer/btnHeaderReducer";


const allReducer = combineReducers({
    btnHeader: btnHeaderReducer,
})

const thunk = store => next => action => {
    if (typeof action === 'function') {
        action(store.dispatch)
    } else {
        next(action)
    }
}

const store = createStore(
    allReducer,
    applyMiddleware(thunk)
)
export default store