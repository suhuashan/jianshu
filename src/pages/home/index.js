/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 12:35:25
 * @LastEditTime: 2019-08-08 12:35:25
 * @LastEditors: your name
 */
import React, {Component} from "react";
import { actionCreators } from "./store";
import { connect } from "react-redux";
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from "./style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";

class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0,0);
    }
    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img 
                        className="banner-img" 
                        alt="轮播图" 
                        src="https://upload-images.jianshu.io/upload_images/14224967-4b05d83d0d4835b2.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/2400"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? (<BackTop onClick={this.handleScrollTop}>顶部</BackTop>) : null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.initHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener("scroll",this.props.changeScrollTopShow);
    }
}
const mapStateToProps = (state) => ({
    showScroll: state.getIn(["home","showScroll"])
})
const mapDispatchToProps = (dispatch) => ({
    initHomeData() {
        dispatch(actionCreators.getInitHomeData());
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleScrollTopShow(true))
        }else{
            dispatch(actionCreators.toggleScrollTopShow(false))
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);