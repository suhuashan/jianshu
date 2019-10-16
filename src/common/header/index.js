/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 12:35:25
 * @LastEditTime: 2019-08-08 12:35:25
 * @LastEditors: your name
 */
import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Link } from 'react-router-dom';
import { actionCreators as LoginActionCreators } from "../../pages/login/store";
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from "./style";

class Header extends Component {
    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logOut } = this.props; 
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    {
                        login ? 
                        <NavItem className="right" onClick={logOut}>退出</NavItem> : 
                        <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={300}
                            classNames="slide"
                            in={focused}
                        >
                            <NavSearch 
                                className={focused ? "focus" : ""}
                                onFocus={() => {handleInputFocus(list)}}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? "focus iconfont zoom" : "iconfont zoom"}>&#xe65b;</i>
                        {this.getSearchInfo()}
                    </SearchWrapper>               
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting" >
                            <i className="iconfont">&#xe615;</i>写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    getSearchInfo() {
        const { mouseIn, focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage }= this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = (page-1) * 10;i < page * 10;i++) {
                newList[i] = newList[i] || "标签";
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                            onClick={() => {handleChangePage(page,totalPage,this.spinIcon)}}
                        >
                            <i 
                                className="iconfont spin" 
                                ref={(icon) => {this.spinIcon = icon}}
                            >&#xe851;</i>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state) => ({
    mouseIn: state.getIn(["header","mouseIn"]),
    focused: state.getIn(["header","focused"]),
    list: state.getIn(["header","list"]),
    page: state.getIn(["header","page"]),
    totalPage: state.getIn(["header","totalPage"]),
    login: state.getIn(["login","login"])
});
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.getSearchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.getSearchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.getMouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.getMouseLeave());
        },
        handleChangePage(page,totalPage,spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig," ");
            if(originAngle) {
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + ( originAngle + 360 ) + 'deg)';

            if(++page > totalPage){
                dispatch(actionCreators.getChangePage(1));
            }else{
                dispatch(actionCreators.getChangePage(page));
            }
        },
        logOut() {
            dispatch(LoginActionCreators.changeLogout());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);