import { api, handleResponse } from "./config"

const AuthServices = {
    login(user) {
        const urlLogin = `${api}/elearning/v4/login`
        const optionLogin = {
            method: "POST",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify(user),
        }
        return fetch(urlLogin, optionLogin).then((res) => res.json())
    },
    updateInfo(dataFormUpdate) {

        let token = JSON.parse(localStorage.getItem("token"))?.accessToken

        const urlUpdateInfo = `${api}/elearning/v4/profile/update`;
        const optionUpdateInfo = {
            method: "POST",
            body: JSON.stringify(dataFormUpdate),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        return fetch(urlUpdateInfo, optionUpdateInfo).then((res) => handleResponse(res, urlUpdateInfo, optionUpdateInfo))
    },
    register(user) {
        const urlRegister = `${api}/elearning/v4/register`
        const optionRegister = {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" },
        }
        return fetch(urlRegister, optionRegister).then((res) => res.json())
    }

}
export default AuthServices