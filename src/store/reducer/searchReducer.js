import { CLOSE_MODAL, OPEN_MODAL_SEARCH } from "../type"

const searchInitial = {
    openSearch: false
}
const searchReducer = (state = searchInitial, action) => {
    switch (action.type) {
        case OPEN_MODAL_SEARCH:
            return {
                ...state,
                openSearch: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                openSearch: false
            }
        default:
            return state;
    }

}
export default searchReducer