import React, { Component } from 'react';

import './representatives-list.css';

class RepresentativesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRepresentative: undefined
    };
  }
  selectRepresentative(rep) {
    this.props.onChange(rep);
  }
  render() {
    return (
      <div>
        <div className="content-header">List {this.props.type ? '/ ' + this.props.type.split(/^(.)/).map((part, i) => {
          if(i === 1) return part.toUpperCase();
          return part;
        }).join('') : ''}</div>
        <div className="table">
          <div className="table-header table-element">
            <span className="first-column">Name</span>
            <span className="second-column">Party</span>
          </div>
          {this.props.representatives.map(rep => {
            return <div className="table-element" onClick={this.selectRepresentative.bind(this, rep)} key={rep.name}>
              <span className="first-column">{rep.name}</span>
              <span className="second-column">{rep.party[0]}</span>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default RepresentativesList
