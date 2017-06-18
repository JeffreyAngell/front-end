import React, { Component } from 'react';

class Dropdown extends Component {
	render() {
		return (
			<select onChange={this.props.updateValue}>
				{this.props.options.map((option, index) => {
					return <option key={option.key} value={option.value}>{option.key}</option>
				})}
			</select>
		);
	}
}

export default Dropdown;
