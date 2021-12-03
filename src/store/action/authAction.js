// import { LOGIN_SUCCESS } from "../type"

// export const loginSuccess=(data)=>{
//     return {type: LOGIN_SUCCESS, payload:data}
// }


// export const fetchLogin=(dataFormLogin)=>{
//     return async(dispatch)=>{
//         let dataLogin=  await AuthServices.login(dataFormLogin)
//         if(dataLogin.data){
//             setUser(dataLogin.data)
//             localStorage.setItem("data",JSON.stringify(dataLogin.data))
//             localStorage.setItem("token",JSON.stringify(dataLogin.data.token))
//           }else
//           if(dataLogin.error){
//             setErrorLogin(dataLogin.error)
//           }
//     }
// }