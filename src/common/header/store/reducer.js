import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    mouseIn: false,
    focused: false,
    list: [],
    page: 1,
    totalPage: 1
});

const getInitList = (previousState,action) => {
    return previousState.merge({
        list: action.list,
        totalPage: action.totalPage
    })
};
export default (previousState = defaultState,action) => {
    switch(action.type) {
        case actionTypes.SEARCHFOCUS:
            return previousState.set("focused",true);
        case actionTypes.SEARCHBLUR:
            return previousState.set("focused",false);
        case actionTypes.GETINITLIST:
            return getInitList(previousState,action);
            // return previousState.set("list",action.list).set("totalPage",action.totalPage);
        case actionTypes.MOUSEENTER:
            return previousState.set("mouseIn",true);
        case actionTypes.MOUSELEAVE:
            return previousState.set("mouseIn",false);
        case actionTypes.CHANGEPAGE: 
            return previousState.set("page",action.page);
        default: 
            return previousState;
    }
}