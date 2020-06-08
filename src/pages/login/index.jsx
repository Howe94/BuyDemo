import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss'
function mapStateToProps(state) {
  return {

  };
}

class index extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-title">
          登录
        </div>
        <div className="login-form-content">
          <form action="#">
            <div className="user-name">
              <label htmlFor="">用户名：<input type="text" name="userName" id="userName"/></label>
            </div>
            <div className="user-password">
              <label htmlFor="">密码：<input type="password" name="password" id="password"/></label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(index);