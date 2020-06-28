import React, { Component } from 'react'
import Head from '../../components/header'
import HomeList from '../homeList/index'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:[]
        }
    }
    render() {
        return (
            <div className="app-container">
                <Head history={this.props.history} />
                <HomeList></HomeList>
            </div>
        )
    }
}
