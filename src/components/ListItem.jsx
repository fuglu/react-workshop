import React from 'react';

const style = {
	fontWeight: '600',
	padding: '10px',
};

export default class ListItem extends React.Component {
	static propTypes = {
		text: React.PropTypes.string,
	}

	render() {
		return (
			<div style={style}>
				{this.props.text}
			</div>
		);
	}
}
