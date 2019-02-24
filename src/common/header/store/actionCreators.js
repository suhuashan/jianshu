import  * as actionTypes  from "./actionTypes";
import { fromJS } from "immutable";
import Axios from "axios";

const getInitList = (list,len) => {
    return {
        type: actionTypes.GETINITLIST,
        list: fromJS(list),
        totalPage: Math.ceil(len / 10)
    }
};
export const getSearchFocus = () => {
    return {
        type: actionTypes.SEARCHFOCUS
    }
}
export const getSearchBlur = () => {
    return {
        type: actionTypes.SEARCHBLUR
    }
}
export const getMouseEnter = () => {
    return {
        type: actionTypes.MOUSEENTER
    }
}
export const getMouseLeave = () => {
    return {
        type: actionTypes.MOUSELEAVE
    }
}
export const getChangePage = (page) => {
    return {
        type: actionTypes.CHANGEPAGE,
        page
    }
}
export const getList = () => {
    return (dispatch) => {
        Axios.get('/api/headList.json').then((res) => {
            if(res.data.success) {
                const listLength = res.data.data.length;
                dispatch(getInitList(res.data.data,listLength));
            }
        }).catch(() => {
            console.log("网络请求失败");
        })
    }
}