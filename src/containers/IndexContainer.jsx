import React from 'react';

const style = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
};

const numberStyle = {
	fontWeight: '600',
	padding: '10px',
};

export default class IndexContainer extends React.Component {
	render() {
		return (
			<div style={style}>
				<div style={numberStyle}>
					0211-123456
				</div>
				<div style={numberStyle}>
					0211-123457
				</div>
				<div style={numberStyle}>
					0211-123458
				</div>
				<div style={numberStyle}>
					0211-123459
				</div>
			</div>
		);
	}
}
