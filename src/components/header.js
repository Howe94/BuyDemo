import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import Home from '../pages/home/index'

export default class header extends Component {
    render() {
        return (
            <div className="main-container">
                首页
                <Link to="/home"/>
            </div>
        )
    }
}
