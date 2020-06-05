import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
const home = asyncComponent(() => import("../pages/home/index"))
const login = asyncComponent(() => import("../pages/login/index"))

export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/home" exact component={home} />
                    <Route path="/login" component={login} />
                    <Redirect exact from='/' to='/home' />
                    <Route component={home} />
                </Switch>
            </HashRouter>
        )
    }
}
