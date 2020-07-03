import React, { Component } from 'react';
import { Avatar, Button } from 'antd';
import {
    PlusOutlined,
    SyncOutlined
} from '@ant-design/icons';
import './index.scss'
function ToolBtn(props) {
    var colorList = ["#9dc6eb", "#f8c471", "#b9a3ef", "#fdb1ca", "#9dc6eb", "#f8c471", "#b9a3ef", "#fdb1ca", "#9dc6eb", "#f8c471", "#b9a3ef", "#fdb1ca", "#9dc6eb", "#f8c471", "#b9a3ef", "#fdb1ca"];
    const toolBtn = props.tipBtn.map((item, index) => {
        return (
            <Button key={item.key} style={{ background: colorList[Math.floor((Math.random() * (colorList.length)) + 1)] }}>{item.value}
            </Button>
        )

    })
    return (
        toolBtn
    )
}
function Content(props) {
    const contentItem = props.authList.map((item, index) => {
        return (
            <div className="author-list" key={index}>
                <a href={item.authSrc} className="avatar">
                    <Avatar src={item.avatar} size={48} />
                </a>
                <a href="http://localhost:3000/#/sign/sign-in"><PlusOutlined /> 关注</a>
                <a href={item.authSrc} className="name">
                    {item.name}
                </a>
                <p>粉丝量{item.fanNum}人</p>
                
            </div>
        )
    })
    return contentItem
}
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipBtn: [
                {
                    value: '会员特惠页面1',
                    key: '122'
                },
                {
                    value: '会员特惠页面2',
                    key: '123'
                },
                {
                    value: '会员特惠页面3',
                    key: '124'
                }
            ],
            authList: [
                {
                    avatar: 'https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
                    name: '念远坏人',
                    fanNum: '232121',
                    authSrc:"https://www.jianshu.com/u/51b4ef597b53?utm_source=desktop&utm_medium=index-users"
                },
                {
                    avatar: 'https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
                    name: '念远坏人',
                    fanNum: '232121',
                    authSrc:"https://www.jianshu.com/u/51b4ef597b53?utm_source=desktop&utm_medium=index-users"
                },
                {
                    avatar: 'https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
                    name: '念远坏人',
                    fanNum: '232121',
                    authSrc:"https://www.jianshu.com/u/51b4ef597b53?utm_source=desktop&utm_medium=index-users"
                },
                {
                    avatar: 'https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
                    name: '念远坏人',
                    fanNum: '232121',
                    authSrc:"https://www.jianshu.com/u/51b4ef597b53?utm_source=desktop&utm_medium=index-users"
                }
            ]
        }
    }
    changOtherAuthers() {
        document.getElementsByClassName("anticon-sync")[0].children[0].setAttribute('class', 'anticon-spin');
        setTimeout(() => {
            document.getElementsByClassName("anticon-sync")[0].children[0].removeAttribute('class', 'anticon-spin')
        },1000)
    }
    render() {

        return (
            <div className="board">
                <div className="board-top">
                    <ToolBtn tipBtn={this.state.tipBtn}></ToolBtn>
                </div>
                <div className="recommendAuthor">
                    <div className="title">
                        推荐作者
                         <Button type="text" className="change-other"  onClick={this.changOtherAuthers.bind(this)}><SyncOutlined />换一批</Button>
                    </div>
                    <div className="content-main">
                        <Content authList={this.state.authList}></Content>
                    </div>
                </div>
            </div>
        );
    }
}

export default index; 