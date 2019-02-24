import  * as actionTypes  from "./actionTypes";
import Axios from "axios";
import { fromJS } from "immutable"; 

const initHomeData = (topicList, articleList, recommendList, writerList) => {
    return {
        type: actionTypes.INIT_HOME_DATA,
        topicList,
        articleList,
        recommendList,
        writerList
    }
};
const moreArticleList = (moreArticle,page) => {
    return {
        type: actionTypes.More_ARTICLE_LIST,
        moreArticle: fromJS(moreArticle),
        page: page + 1
    }
};
export const getInitHomeData = () => {
    return (dispatch) => {
        Axios.get("/api/home.json").then((res) => {
            if(res.data.success){
                const { topicList, articleList, recommendList, writerList } = res.data.data;
                dispatch(initHomeData(topicList, articleList, recommendList, writerList));
            }
        }).catch(() => {
            console.log("网络请求失败");
        })
    }
}
export const getMoreArticleList = (page) => {
    return (dispatch) => {
        Axios.get("/api/moreArticleList.json?page=" + page).then((res) => {
            if(res.data.success){
                const moreArticle = res.data.data;
                dispatch(moreArticleList(moreArticle,page));
            }
        }).catch(() => {
            console.log("网络请求失败");
        })
    }
}
export const toggleScrollTopShow = (show) => {
    return {
        type: actionTypes.CAHNGE_SCROLL_TOP_SHOW,
        show
    }
}