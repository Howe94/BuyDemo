import React, { Component } from 'react'
import Head from '../../components/header'

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
                <Head />
            </div>
        )
    }
}
