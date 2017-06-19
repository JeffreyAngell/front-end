import React from 'react';

import './info.css';

export default (props) => {
	if(!props.representative) {
		return (
			<div className="info not-filled">
				<div className="content-header">Info</div>
				<span>First Name</span>
				<span>Last Name</span>
				<span>District</span>
				<span>Phone</span>
				<span>Office</span>
			</div>
		);
	} else {
		const name = props.representative.name;

		return (
			<div className="info">
				<div className="content-header">Info</div>
				<span>{name.split(' ').slice(0, name.split(' ').length - 1).join(' ')}</span>
				<span>{name.split(' ')[name.split(' ').length - 1]}</span>
				<span>{props.representative.state + (props.representative.district ? ' - ' + props.representative.district : '')}</span>
				<span>{props.representative.phone}</span>
				<span>{props.representative.office}</span>
			</div>
		);
	}
};
