import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
});

const initHomeData = (previousState,action) =>  {
    return previousState.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
    })
};
const getMoreArticleList = (previousState,action) => {
    return previousState.merge({
        articleList: previousState.get("articleList").concat(action.moreArticle),
        articlePage: action.page
    })
};
export default (previousState = defaultState,action) => {
    switch(action.type) {
        case actionTypes.INIT_HOME_DATA:
            return initHomeData(previousState,action);
        case actionTypes.More_ARTICLE_LIST:
            return getMoreArticleList(previousState,action);
        case actionTypes.CAHNGE_SCROLL_TOP_SHOW:
            return previousState.set("showScroll",action.show);
        default: 
            return previousState;
    }
}