import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function index() {
    return <h2>灰熊</h2>
}

function list() {
    return <h2>new page</h2>
}

function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list">关于</Link></li>
            </ul>
            <Route path="/" exact component={index} />
            <Route path="/list/" component={list} />
        </Router>
    );
}

export default AppRouter;
