import React, { Component } from 'react';
import { Avatar, Button } from 'antd';
import { getAuthorsList } from '../../api/Api'
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
                    {item.authorName}
                </a>
                <p>粉丝量{item.fans}人</p>

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
            authList: [],
            changeAuthorIndex : 0,//初始化前三条推荐作者数据
        }
    }
    getAuthorsList = () => {
        let authortemp = {
            method: 'GET',
            params: {
                startIndex: this.state.changeAuthorIndex,
                endIndex: this.state.changeAuthorIndex + 3,
            }
        }
        getAuthorsList(authortemp).then((response) => {
            this.setState({
                authList: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    changOtherAuthers() {
        this.state.changeAuthorIndex += 3
        this.getAuthorsList()
        document.getElementsByClassName("anticon-sync")[0].children[0].setAttribute('class', 'anticon-spin');
        setTimeout(() => {
            document.getElementsByClassName("anticon-sync")[0].children[0].removeAttribute('class', 'anticon-spin')
        }, 1000)
    }
    componentWillMount() {
        this.getAuthorsList()
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
                         <Button type="text" className="change-other" onClick={this.changOtherAuthers.bind(this)}><SyncOutlined />换一批</Button>
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