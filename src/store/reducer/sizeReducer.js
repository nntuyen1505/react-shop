import { CLOSE_MODAL, OPEN_MODAL_SIZE } from "../type"

const sizeInitial = {
    openSize: false
}
const sizeReducer = (state = sizeInitial, action) => {
    switch (action.type) {
        case OPEN_MODAL_SIZE:
            return {
                ...state,
                openSize: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                openSize: false
            }
    }
    return state
}
export default sizeReducer