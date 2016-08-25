import React from 'react';

const style = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
};

export default class IndexContainer extends React.Component {
	render() {
		return (
			<div style={style}>
				<div>
					0211-123456
				</div>
				<div>
					0211-123457
				</div>
				<div>
					0211-123458
				</div>
				<div>
					0211-123459
				</div>
			</div>
		);
	}
}
