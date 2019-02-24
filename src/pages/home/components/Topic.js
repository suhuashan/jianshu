import React, {Component} from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";


class Topic extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                        <TopicItem key={item.get("id")}>
                            <img 
                                className="topic-pic"
                                src={item.get("imgUrl")}
                                alt="话题"
                            />
                            {item.get("title")}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.get("home").get("topicList")
});
export default connect(mapStateToProps,null)(Topic);