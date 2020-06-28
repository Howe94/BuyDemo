import React, { Component } from 'react';
import { Layout } from 'antd';
import ArticleList from '../../components/articleList/index'
import './index.scss'
const { Sider, Content } = Layout;


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="home-list-container">
                <Layout>
                    <Content>
                        <ArticleList></ArticleList>
                    </Content>
                    <Sider>右侧边栏</Sider>
                </Layout>
            </div>
        );
    }
}

export default index;