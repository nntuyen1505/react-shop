import {
    ERROR_LOGIN,
    ERROR_LOGUP,
    ERROR_UPDATE,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGUP_SUCCESS,
    UPDATE_SUCCESS,
} from "../type";

const authReducerInitial = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    userLogup: JSON.parse(localStorage.getItem("user")) || null,
    errorLogin: "",
    errorLogup: "",
    errorUpdate: "",
};

const authReducer = (state = authReducerInitial, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            /*Gửi  Thông tin đăng nhập + accessToken */
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                user: action.payload,
            };
        case ERROR_LOGIN:
            return {
                ...state,
                errorLogin: action.payload,
            };
        case ERROR_LOGUP:
            return {
                ...state,
                errorLogup: action.payload,
            };
        case ERROR_UPDATE:
            return {
                ...state,
                errorUpdate: action.payload,
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return {
                ...state,
                user: null,
            };

        case UPDATE_SUCCESS:
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                user: action.payload,
            };

        case LOGUP_SUCCESS:
            return {
                ...state,
                userLogup: action.payload,
            };
        default:
            return state;
    }
};
export default authReducer;