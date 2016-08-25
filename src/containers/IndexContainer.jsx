import React from 'react';

import List from '../components/List';
import ListItem from '../components/ListItem';

const style = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
};

export default class IndexContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numbers: [
				'0211-123456',
				'0211-123457',
				'0211-123458',
				'0211-123459',
			],
		};
	}

	render() {
		return (
			<div style={style}>
				<List>
					{this.state.numbers.map(number => (
						<ListItem
							text={number}
						/>
					))}
				</List>
			</div>
		);
	}
}
