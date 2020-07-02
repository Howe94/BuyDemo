import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userForm: {
                userName: '',
                password: ''
            },
            visiable: false
        }
    }


    render() {

        return (
            <div className="login-container">
                <div className="logo" onClick={() => this.props.history.push("/app")}>
                    HOWE
            </div>
                <div className="main">
                    <div className="sign-content">
                        <h2 className="sign-title">
                            <div className="title">
                                <a href="#" className="sign-in">登录</a>
                                <a href="#" className="sign-up">注册</a>
                            </div>

                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(index);