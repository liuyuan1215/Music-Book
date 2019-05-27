import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  // Switch,
  Redirect,
  Prompt,
  NavLink
} from 'react-router-dom';
import A from './components/A'
import B from './components/B'
import C from './components/C'
import F from './components/F'
import Children from './components/Children'
import Home from './components/Home'
import './App.css';
import store from './store';
import {add,reduce} from './action';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <div>{props.num}</div>
      <button onClick={()=>{
        console.log('我要修改num值');
        // store.dispatch(add(3));
        props.add();
      }}>add</button>
      <button onClick={()=>{
        console.log('我要修改num值');
        store.dispatch(reduce());
      }}>reduce</button>
      <Router>
        <NavLink exact activeClassName="selected" to='/'>首页</NavLink>
        <NavLink activeClassName="selected" to='/a/a1'>a页面</NavLink>
        <NavLink activeStyle={{color:'#000'}} to='/b'>b页面</NavLink>
        <NavLink to='/c/c1'>c页面</NavLink>
        <NavLink to='/d'>d页面</NavLink>
        <NavLink to='/children'>child</NavLink>
        <NavLink to='/e'>重定向</NavLink>
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
          <F></F>
      </Router>
    </div>
  );
}
let mapStateToProps = (state) =>{
  return {
    num:state.num
  }
}

export default connect(mapStateToProps,{add})(App);
