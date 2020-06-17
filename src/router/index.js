import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
const home = asyncComponent(() => import("../pages/home/index"))
const login = asyncComponent(() => import("../pages/login/index"))
const app = asyncComponent(() => import("../pages/app/index"))

export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/app" exact component={app} />
                    <Redirect exact from='/' to='/app' />
                    <Route path="/login" component={login} />
                    <Route path="/home" component={home} />
                </Switch>
            </HashRouter>
        )
    }
}
