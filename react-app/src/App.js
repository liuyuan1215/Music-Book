import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom';
import A from './components/A'
import B from './components/B'
import C from './components/C'
import Children from './components/Children'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>首页</Link>
        <Link to='/a/a1'>a页面</Link>
        <Link to='/b'>b页面</Link>
        <Link to='/c/c1'>c页面</Link>
        <Link to='/d'>d页面</Link>
        <Link to='/children'>child</Link>
        <Link to='/e'>e页面</Link>
        {/* <Route exact path='/' component={Home}></Route>
        <Route path='/a' component={A}></Route>
        <Route path='/b' component={B}></Route> */}

        {/* <Switch>
          <Route path='/a/:id' component={A}></Route>
          <Route path='/b' component={B}></Route>
          <Route path='/c/:num' component={C}></Route>
          <Route path='/' component={Home}></Route>
        </Switch> */}

          <Route exact path='/' component={Home}></Route>
          <Route exact path='/a/:id' component={A}></Route>
          <Route exact path='/b' component={B}></Route>
          <Route exact path='/c/:num' component={C}></Route>
          <Route exact path='/d' render={()=>{
            return <h1>44444</h1>
          }}></Route>
          <Route path='/children' children={(props)=>{
            let str = props.match?'hahaha':'xixixi';
            console.log(str);
            return <Children str={str}></Children>
          }}></Route>
          <Route path='/e' render={()=>{
            return <Redirect to='/'></Redirect>
          }}></Route>
      </Router>
    </div>
  );
}

export default App;
