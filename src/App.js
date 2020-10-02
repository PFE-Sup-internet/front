import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <Router>
        <Route path={`/`} component={Header}></Route>
        <Route exact path={`/`} component={Home}></Route>
        <Route exact path={`/login`} component={Login}></Route>
        <Route exact path={`/register`} component={Register}></Route>
      </Router>
    </div>
  );
}

export default App;
