import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";


const defaultState = fromJS({
    login: false
});


export default (previousState = defaultState,action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LOGIN:
            return previousState.set("login",action.value);
        case actionTypes.CHANGE_LOGOUT:
            return previousState.set("login",action.value);
        default:
            return previousState;
    }
}