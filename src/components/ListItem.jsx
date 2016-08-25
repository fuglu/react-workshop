import React from 'react';

export default class ListItem extends React.Component {
	static propTypes = {
		text: React.PropTypes.string,
		isFirstItem: React.PropTypes.bool,
		style: React.PropTypes.object,
	}

	static defaultProps = {
		isFirstItem: false,
		style: {},
	}

	render() {
		const style = {
			fontWeight: '600',
			padding: '10px',
			borderTop: this.props.isFirstItem ? null : '1px solid #ccc',
			...this.props.style,
		};

		return (
			<div style={style}>
				{this.props.text}
			</div>
		);
	}
}
