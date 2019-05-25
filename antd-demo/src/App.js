import React from 'react';
import logo from './logo.svg';
import { Button, Icon, Calendar } from 'antd';
import './App.css';


function App() {
  function onPanelChange(value, mode) {
    // console.log(value, mode);
  }


  return (
    <div className="App">
      <Button type="primary">1111</Button>
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
      <Icon type="login" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
