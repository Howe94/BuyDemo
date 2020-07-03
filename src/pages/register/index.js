import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
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
  submit = () => {
    if (this.state.userForm.userName !== 'haozch' || this.state.userForm.password !== '123456') {
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

  render() {

    return (
      <div className="register-container">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <FormItem
                label="昵称"
                name="username"
                rules={[{ required: true, message: '请输入您的昵称!' }]}
              >
                <Input />
              </FormItem>
              <FormItem
                label="手机号"
                name="telPhone"
                rules={[{ required: true, message: '请输入您的手机号!' }]}
              >
                <Input />
              </FormItem>
              <FormItem
                label="设置密码"
                name="password"
                rules={[{ required: true, message: '请输入您的密码!' }]}
              >
                <Input.Password />
              </FormItem> 
              <FormItem {...tailLayout}>
                <Button type="primary" shape="round" size="large" htmlType="submit">
                  注册
                </Button>
              </FormItem>
            </Form>
          </div>
    );
  }
}

export default connect()(index);