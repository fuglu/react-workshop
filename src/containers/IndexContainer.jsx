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
	render() {
		return (
			<div style={style}>
				<List>
					<ListItem
						text={'0211-123456'}
					/>
					<ListItem
						text={'0211-123457'}
					/>
					<ListItem
						text={'0211-123458'}
					/>
					<ListItem
						text={'0211-123459'}
					/>
				</List>
			</div>
		);
	}
}
