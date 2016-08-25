import React from 'react';

export default class ListItem extends React.Component {
	static propTypes = {
		text: React.PropTypes.string,
		isFirstItem: React.PropTypes.bool,
	}

	static defaultProps = {
		isFirstItem: false,
	}

	render() {
		const style = {
			fontWeight: '600',
			padding: '10px',
			borderTop: this.props.isFirstItem ? null : '1px solid #ccc',
		};

		return (
			<div style={style}>
				{this.props.text}
			</div>
		);
	}
}
