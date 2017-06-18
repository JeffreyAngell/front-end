import React, { Component } from 'react';
import './dropdown-styles.css';
import Dropdown from '../components/Dropdown';

import States from './states.json';

class Dropdowns extends Component {
  constructor(props) {
    super(props);
    this.representativeOptions = [{
      key: 'Senators',
      value: 'senators'
    },{
      key: 'Representatives',
      value: 'representatives'
    }];
    this.states = Object.keys(States).map(key => {
      return {
        key: States[key],
        value: key
      };
    });
    this.state = {
      repType: 'senators',
      stateCode: 'AL'
    };
  }
  updateRepresentative(e) {
    this.setState({
      repType: e.target.value
    });
  }
  updateState(e) {
    this.setState({
      stateCode: e.target.value
    });
  }
  render() {
    return (
      <div className="">
      	<Dropdown options={this.representativeOptions} updateValue={this.updateRepresentative.bind(this)}/>
      	<Dropdown options={this.states} updateValue={this.updateState.bind(this)}/>
        <button onClick={this.update.bind(this)}>
        	  Submit
        	</button>
      </div>
    );
  }
  update() {
  	this.props.onChange(this.state.repType, this.state.stateCode);
  }
}

export default Dropdowns;
