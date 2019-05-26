import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.js'
import Home from './page/Home'
import StudentAdd from './page/StudentAdd'
import StudentList from './page/StudentList'
import StudentList2 from './page/StudentList2'

export default class IRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <App>
                        <Route path='/admin/home' component={Home}></Route>
                        <Route path='/admin/student/add' component={StudentAdd}></Route>
                        <Route path='/admin/student/list' component={StudentList}></Route>
                        <Route path='/admin/student/list2' component={StudentList2}></Route>
                    </App>
                </Router>
            </div>
        )
    }
}
