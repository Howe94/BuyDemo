import React, { Component } from 'react';
import { connect } from 'react-redux';
import VisiableDiv from '../../components/visiableDiv'
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
  handelChange = (e) => {
    // let userForm = Object.assign({},this.state.userForm,{[e.target.name]:e.target.value})
    this.setState({
      userForm: {
        ...this.state.userForm,
        [e.target.name]: e.target.value,
      }
    })
  }
  submit = () => {
    if (this.state.userForm.userName != 'haozch' || this.state.userForm.password != '123456') {
      window.confirm("账户密码有误！")
    } else {
      window.confirm("登录成功！")
    }
  }
  changeVisiable(value) {
    console.log(value)
    this.setState({
      visiable: value
    })
  }
  showSonPage() {
    return (
      this.state.visiable ? (<VisiableDiv changeVisiable={(value) => this.changeVisiable(value)}></VisiableDiv>) : null
    )
  }
  render() {
    return (
      <div className="login-container">
        <div className="logo">
          BLOG
        </div>
        <div className="main">
          <div className="login-form-content">
            <form action="#">
              <div className="user-name">
                <label htmlFor="">用户名：<input type="text" name="userName" id="userName" value={this.state.userForm.userName} onChange={this.handelChange.bind(this)} /></label>
              </div>
              <div className="user-password">
                <label htmlFor="">密码：<input type="password" name="password" id="password" value={this.state.userForm.password} onChange={this.handelChange.bind(this)} /></label>
              </div>
              <div className="login-submit">
                <input type="button" value="登录" onClick={this.submit.bind(this)} />
                <input type="button" value="注册" onClick={() => this.changeVisiable(true)} />
              </div>
            </form>
          </div>
        </div>
        {this.showSonPage()}
      </div>
    );
  }
}

export default connect()(index);