import React, {Component} from "react";
import { actionCreators } from "./store";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { 
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from "./style";

class Login extends Component {
    render() {
        const { login, loginIn } = this.props;
        if(!login){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => {this.account = input}}/>
                        <Input placeholder="密码" type="password" ref={(input) => {this.password = input}}/>
                        <Button onClick={() => loginIn(this.account,this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/"/>
        }
    }
}
const mapStateToProps = (state) => ({
    login: state.getIn(["login","login"])
});
const mapDispatchToProps = (dispatch) => ({
    loginIn(accountElem,passwordElem) {
        dispatch(actionCreators.changeLogin(accountElem,passwordElem));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);