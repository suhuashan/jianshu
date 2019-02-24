import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
    detail: {}
});

export default (previousState = defaultState,action) => {
    switch(action.type){
        case actionTypes.GET_DETAIL:
            return previousState.set("detail",action.data)
        default: 
            return previousState;
    }
}