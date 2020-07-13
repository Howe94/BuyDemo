import React, { Component } from 'react';
import { getArticleClick } from '../../api/Api'
import './index.scss'

function ArticleList(props) {
    const articleList = props.dataList.map((item, index) => {
        return (
            <li key={index}> 
                {item.imgflag ? (
                    <div className="haveimg">
                        <a href="http://localhost:3000/#/sign/sign-in" className="wrap-img">
                            <img src={item.imgUrl} alt="120"></img>
                        </a>
                        <div className="article-content">
                            <span className="article-title">{item.title}</span>
                            <p className="abstract">{item.summary}</p>
                        </div>
                    </div>
                ) : (
                        <div className="article-content">
                            <span className="article-title">{item.title}</span>
                            <p className="abstract">{item.summary}</p>
                        </div>)}

            </li>
        )
    })
    return articleList;
}

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],

        }
    }

    componentWillMount() {
        let articleInfo = {
            method: 'GET'
        }
        getArticleClick(articleInfo).then((response) => {
            this.setState({
                dataList: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div className="articleList-container">
                <div className="article-arousel">
                    <img alt="example" src="https://upload.jianshu.io/admin_banners/web_images/4984/79ff791e7ddb523246801d656818282e66d40d98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                </div>
                <div className="article-list">
                    <ul>
                        <ArticleList dataList={this.state.dataList}></ArticleList>
                    </ul>
                </div>
            </div>
        );
    }
}

export default index;