import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Write extends Component {
    render() {
        const { login } = this.props;
        console.log(login);
        if(login){
            return (
                <div>写文章</div>
            )
        }else{
            return <Redirect to="/login"/>
        }
    }
}
const mapStateToProps = (state) => ({
    login: state.getIn(["login","login"])
})


export default connect(mapStateToProps,null)(Write);