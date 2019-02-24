import React, {Component} from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { ListItem, ListInfo, LoadMore } from "../style";
import { Link } from "react-router-dom";


class List extends Component {
    
    render() {
        const { list, getMoreActicle, page } = this.props;
        return (
            <div>
                {
                    list.map((item,index) => (
                        <Link key={index} to={'/detail/' + item.get("id")}>
                            <ListItem  >
                                <img
                                    className="pic"
                                src={item.get("imgUrl")}
                                    alt="列表图片"
                                />
                                <ListInfo>
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">
                                        {item.get("desc")}
                                    </p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => getMoreActicle(page)}>更多文章</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(["home","articleList"]),
    page: state.getIn(["home","articlePage"])
});
const mapDispatchToProps = (dispatch) => ({
    getMoreActicle(page) { 
        dispatch(actionCreators.getMoreArticleList(page));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(List);