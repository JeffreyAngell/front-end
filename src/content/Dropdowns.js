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
      repType: undefined,
      stateCode: undefined
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
    let states = this.states;
    let repTypes = this.representativeOptions;
    if(!this.state.repType) {
      repTypes = [{key: 'Select Type'}].concat(repTypes);
    }
    if(!this.state.stateCode) {
      states = [{key: 'Select State'}].concat(states);
    }
    return (
      <div className="dropdowns">
      	<Dropdown options={repTypes} updateValue={this.updateRepresentative.bind(this)}/>
      	<Dropdown options={states} updateValue={this.updateState.bind(this)}/>
        <button onClick={this.update.bind(this)}>
        	  Submit
        	</button>
      </div>
    );
  }
  update() {
    if(!this.state.repType || !this.state.stateCode) {
      alert('Please select a value from the dropdown before submitting!');
      return;
    }
    if(this.state.stateCode === 'DC' && this.state.repType === 'senators') {
      alert('District of Columbia doesn\'t have senators. Please select another value');
      return;
    }
    this.props.onChange(this.state.repType, this.state.stateCode);
  }
}

export default Dropdowns;
