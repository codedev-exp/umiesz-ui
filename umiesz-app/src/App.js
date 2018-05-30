import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';

import Header from './components/Header';
import Home from './components/Home';

import { Button } from 'reactstrap';


const mapStateToProps = state => ({
  appName: state.appName
});

class App extends Component {

  render() {
    
    //const onClick = () => store.dispatch({ type: 'TOGGLE' });
    return (
      <div className="App">
        <Header appName="Header" />
        {this.props.appName}
        <Button color="danger">Danger!</Button>
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);
