import React, {Component} from "react";
import { connect } from "react-redux";
import { WriterWrapper, WriterItem, LoadMoreWriter } from "../style";


class Writer extends Component {
    render() {
        const { list } = this.props;
        return (
            <WriterWrapper>
                <div className="title">
                    <span className="author">推荐作者</span>
                    <span className="spin"><i className="iconfont" >&#xe851;</i>换一批</span>
                </div>
                {
                    list.map((item) => (
                        <WriterItem key={item.get("id")}>
                            <img 
                                className="writer-pic"
                                src={item.get("imgUrl")}
                                alt=""
                            />
                            <div className="desc">
                                <div>
                                    {item.get("author")}
                                    <span className="focus">+关注</span>
                                </div>
                                <div className="record">写了{item.get("words")}字 {item.get("liked")}喜欢</div>
                            </div>
                        </WriterItem>
                    ))
                }
                <LoadMoreWriter>更多作者</LoadMoreWriter>
            </WriterWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(["home","writerList"])
});

export default connect(mapStateToProps,null)(Writer);