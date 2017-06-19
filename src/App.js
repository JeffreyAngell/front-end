import React, { Component } from 'react';
import Title from './Title';
import Dropdowns from './content/Dropdowns';
import MainContent from './content/MainContent';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      representatives: {
        list: [],
        type: ''
      }
    };
  }
  update(repType, stateCode) {
    fetch('/' + repType + '/' + stateCode)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          representatives: {
            list: data.results,
            type: repType
          }
        });
      });
  }
  render() {
    return (
      <div className="App">
        <Title/>
        <Dropdowns onChange={this.update.bind(this)}/>
        <MainContent representatives={this.state.representatives}/>
      </div>
    );
  }
}

export default App;
