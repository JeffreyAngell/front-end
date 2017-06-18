import React, { Component } from 'react';

import RepresentativesList from './RepresentativesList';
import Info from './Info';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      representative: undefined
    };
  }
  updateRepresentative(rep) {
    this.setState({
      representative: rep
    });
  }
  render() {
    return (
      <div className="content">
        <div className="body-pane">
          <RepresentativesList representatives={this.props.representatives.list} type={this.props.representatives.type} onChange={this.updateRepresentative.bind(this)}/>
        </div>
        <div className="body-pane">
          <Info representative={this.state.representative}/>
        </div>
      </div>
    );
  }
}

export default MainContent;
