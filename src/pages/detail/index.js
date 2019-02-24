import React, {Component} from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { withRouter } from "react-router-dom";
import{
    DetailWrapper,
    Header,
    Content
} from "./style";

class Detail extends Component {
    render() {
        const { detail } = this.props;
        return (
            <DetailWrapper>
                <Header>{detail.get("title")}</Header>
                <Content dangerouslySetInnerHTML={{__html:detail.get("content")}} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapStateToProps = (state) => ({
    detail: state.getIn(["detail","detail"])
});
const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));