import React from 'react';
import { statuses } from '../data';
import DropWrapper from '../components/DropWrapper';
import Item from '../components/Item';

const Homepage = () => {
	return (
		<div className={'row'}>
			{statuses.map(s => {
				return (
					<div key={s.status} className={'col-wrapper'}>
						<h2 className={'col-header'}>{s.status.toUpperCase()}</h2>
						<DropWrapper>
							<Item></Item>
							<Item></Item>
						</DropWrapper>
					</div>
				);
			})}
		</div>
	);
};

export default Homepage;
