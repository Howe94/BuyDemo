import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginBody from '../login/index'
import RegisterBody from '../register/index'
import './index.scss'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userForm: {
                userName: '',
                password: ''
            },
            visiable: false,
            isSignFlag: false,//路由跳转登录注册标识 true:登录
        }
    }
    componentWillMount() {
        // console.log(this.props.history.location.pathname)
        this.setState({
            isSignFlag: this.props.history.location.pathname === '/sign/sign-in' ? true : false
        })
    }
    isSignIN = (path) => {
        if (path === '/sign/sign-in') {
            this.setState({
                isSignFlag: true
            })
            this.props.history.push("/sign/sigin-in")
            return true;
        } else {
            this.setState({
                isSignFlag: false
            })
            this.props.history.push("/sign/sigin-up")
            return false
        }
    }

    render() {

        return (
            <div className="sign-container">
                <div className="logo" onClick={() => this.props.history.push("/app")}>
                    HOWE
            </div>
                <div className="main">
                    <div className="sign-content">
                        <h2 className="sign-title">
                            <div className="title">
                                <p className={`sign-in ${this.state.isSignFlag ? 'sigin-active' : ''}`} onClick={this.isSignIN.bind(this, "/sign/sign-in")}>登录</p>
                                <p className={`sign-up ${!this.state.isSignFlag ? 'sigin-active' : ''}`} onClick={this.isSignIN.bind(this, "/sign/sigin-up")}>注册</p>
                            </div>
                        </h2>
                        <div className="sign-body">
                            <Switch>
                                <Route path="/sign/sign-in" component={LoginBody} />
                                <Route path="/sign/sigin-up" component={RegisterBody} />
                                <Redirect to={this.state.isSignFlag ? "/sign/sign-in" : "/sign/sigin-up"} />
                            </Switch>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(index);