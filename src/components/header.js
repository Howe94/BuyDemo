import React, { Component } from 'react'
import { Button, Input } from 'antd';
import 'antd/dist/antd.css'
import './public.scss'
const { Search } = Input;
export default class header extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="container">
                    <div className="container-item logo-container">
                        <h1 onClick={() => this.props.history.push("/home")}>HOWE</h1>
                    </div>
                    <div className="container-item search-container">
                        <>
                            <Search
                                placeholder="请输入内容"
                                enterButton="Search"
                                size="large"
                                onSearch={value => console.log(value)}
                            />
                        </>
                    </div>
                    <div className="container-item right-container">
                        <Button type="text" size="large" onClick={() => this.props.history.push("/sign/sign-in")}>登录</Button>
                        <Button type="primary" shape="round" size="large" onClick={() => this.props.history.push("/sign/sign-up")}>注册</Button>
                        <Button type="primary" shape="round" size="large">写文章</Button>
                    </div>
                </div>
            </div>
        )
    }
}