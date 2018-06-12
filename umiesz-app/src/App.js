import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import Home from './components/home';
import Register from './register';
import Login from './login';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.scss';

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends Component {

  render() {
    
    //const onClick = () => store.dispatch({ type: 'TOGGLE' });
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </div>
      </Router>

    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);
