import * as actionTypes from "./actionTypes";
import Axios from "axios";


const loginIn = () => {
    return {
        type: actionTypes.CHANGE_LOGIN,
        value: true
    }
}
export const changeLogin = (account,password) => {
    return (dispatch) => {
        Axios.get("/api/login.json?account=" + account +"&password=" + password).then((res) => {
            if(res.data.success) {
                dispatch(loginIn());
            }
        }).catch(() => {
            console.log("网络请求失败");
        })
    }
}
export const changeLogout = () => {
    return{
        type: actionTypes.CHANGE_LOGOUT,
        value: false
    }
}