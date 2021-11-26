import {OPEN_SEARCH_HEADER } from "../type"

const initialState={
    openbtn:false
}
const btnHeaderReducer=(state=initialState,action)=>{
    switch(action.type){
        case OPEN_SEARCH_HEADER:
            return {
                ...state,
                openbtn:true
            }
    }
    return state
}
export default btnHeaderReducer