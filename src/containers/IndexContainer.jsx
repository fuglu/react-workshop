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
				Hello world
			</div>
		);
	}
}
