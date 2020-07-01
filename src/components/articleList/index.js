import React, { Component } from 'react';
import './index.scss'

function ArticleList(props) {
    const articleList = props.dataList.map((item, index) => {
        return (
            <li key={index}>
                {item.imgflag ? (
                    <div className="haveimg">
                        <a href="#" className="wrap-img">
                            <img src="https://upload-images.jianshu.io/upload_images/15992237-0f8b7cb161a15ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="120"></img>
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
            dataList: [
                {
                    id: 'fafdaf',
                    title: '文章标题哈',
                    summary: '三毛说：“一个朋友很好，两个朋友就多了一点，三个朋友就未免太多了。 知音，能有一个已经很好了，不必太多，如果实在没有，还有自己，好好对待自己...',
                    imgflag: false
                },
                {
                    id: 'afa',
                    title: '文章标题哈',
                    summary: '三毛说：“一个朋友很好，两个朋友就多了一点，三个朋友就未免太多了。 知音，能有一个已经很好了，不必太多，如果实在没有，还有自己，好好对待自己...',
                    imgflag: true
                },
                {
                    id: 'afdafa',
                    title: '文章标题哈',
                    summary: '文章内三毛说：“一个朋友很好，两个朋友就多了一点，三个朋友就未免太多了。 知音，能有一个已经很好了，不必太多，如果实在没有，还有自己，好好对待自己..',
                    imgflag: true
                },
                {
                    id: 11,
                    title: '文章标题哈',
                    summary: '文章内容三毛说：“一个朋友很好，两个朋友就多了一点，三个朋友就未免太多了。 知音，能有一个已经很好了，不必太多，如果实在没有，还有自己，好好对待自己...',
                    imgflag: false
                },
                {
                    id: 4564561,
                    title: '文章标题哈',
                    summary: '文章内容哈三毛说：“一个朋友很好，两个朋友就多了一点，三个朋友就未免太多了。 知音，能有一个已经很好了，不必太多，如果实在没有，还有自己，好好对待自己...',
                    imgflag: true
                },
                {
                    id: 445645,
                    title: '文章标题哈',
                    summary: '文章内容三毛说：“一个朋友很好郝总超，两个朋友就多了一点，三个朋友就未免太多了。 知音，能有一个已经很好了，不必太多，如果实在没有，还有自己，好好对待自己...',
                    imgflag: false
                }
            ],

        }
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