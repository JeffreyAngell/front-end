import React, { Component } from 'react';

export default props => {console.log(props); return (
	<select onChange={props.updateValue}>
		{props.options.map((option, index) => {
			return <option key={option.key} value={option.value}>{option.key}</option>
		})}
	</select>
)};
