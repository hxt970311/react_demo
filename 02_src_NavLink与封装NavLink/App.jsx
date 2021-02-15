import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyNavLink from './components/MyNavLink/index'
import Home from './pages/Home/index'
import About from './pages/About/index'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 编写路由链接 */}
                            <MyNavLink to="/home">Home</MyNavLink>
                            <MyNavLink to="/about">About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Route path="/home" component={Home} />
                                <Route path="/about" component={About} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
