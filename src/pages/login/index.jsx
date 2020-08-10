import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
// 先引入组件
import { loginClick } from '../../api/Api';
import './index.scss'
const FormItem = Form.Item;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
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
  //登录信息提交
  submit = () => {
    // TODO 校验通过
    let loginInfo = {
      method: 'POST',
      data: this.state.userForm
    }
    loginClick(loginInfo).then((response) => {
      // console.log("登录成功")
      if (response.status === '200') {
        this.props.history.push("/app")
      }
    }).catch((error) => {
      console.log(error)
    })
  }
  changeVisiable(value) {
    console.log(value)
    this.setState({
      visiable: value
    })
  }
  // 字段校验规则
  checkUserName(rule,value,callback) {
    const reg = /^[a-zA-Z0-9_\ue00-\u9fa5]+$/;
    if (!reg.test(value)) {
      return Promise.reject('仅允许输入汉字、字母、数字和下划线');
    }
  }

  render() {
    return (
      <div className="login-container">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <FormItem
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入您的账户名!' }, {
              validator:this.checkUserName.bind(this)
            }]}
          >
            <Input name="userName" value={this.state.userForm.userName} onChange={this.handelChange.bind(this)} />
          </FormItem>

          <FormItem
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入您的密码!' }]}
          >
            <Input.Password name="password" value={this.state.userForm.password} onChange={this.handelChange.bind(this)} />
          </FormItem>
          <FormItem {...tailLayout}>
            <Button type="primary" shape="round" size="large" htmlType="submit" onClick={this.submit.bind(this)}>
              登录
                </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default connect()(index);