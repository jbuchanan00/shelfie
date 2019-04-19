import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from "./components/Header"
import Form from "./components/Form"
import {HashRouter as Router, Switch, Route} from "react-router-dom"

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
      <Header />
        </div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/add" component={Form} />
          <Route path="/edit/:id" component={Form} />
        </Switch>
      </Router>
    );
  }
}

export default App;
