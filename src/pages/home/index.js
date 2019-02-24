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
                        src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
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