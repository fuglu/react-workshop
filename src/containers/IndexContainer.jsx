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
				{ id: 1, localized: '0211-123456' },
				{ id: 2, localized: '0211-123457' },
				{ id: 3, localized: '0211-123458' },
				{ id: 4, localized: '0211-123459' },
			],
		};
	}

	render() {
		return (
			<div style={style}>
				<List>
					{this.state.numbers.map((number, index) => (
						<ListItem
							key={number.id}
							text={number.localized}
							isFirstItem={index === 0}
							style={{
								background: index % 2 ? '#eee' : '#fff',
							}}
						/>
					))}
				</List>
			</div>
		);
	}
}
