import React from 'react';

const listStyle = {
	border: '1px solid #ccc',
	borderRadius: '10px',
};

export default class List extends React.Component {
	static propTypes = {
		children: React.PropTypes.array,
	};

	render() {
		return (
			<div style={listStyle}>
				{this.props.children}
			</div>
		);
	}
}
