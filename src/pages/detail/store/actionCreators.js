import * as actionTypes from "./actionTypes";
import Axios from "axios";
import { fromJS } from "immutable";

const getDetailAction = (data) => {
    return {
        type: actionTypes.GET_DETAIL,
        data: fromJS(data)
    }
};
export const getDetail = (id) => {
    return (dispatch) => {
        Axios.get("/api/detail.json?id=" + id).then((res) => {
            if(res.data.success) {
                dispatch(getDetailAction(res.data.data));
            }
        }).catch(() => {
            console.log("网络请求失败");
        })
    }
}