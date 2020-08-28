import React from 'react';

const Item = ({ id, draggable }) => {
	const dragStart = e => {
		console.log('item dragStart');
		const target = e.target;

		e.dataTransfer.setData('card_id', target.id);

		setTimeout(() => {
			target.style.display = 'none';
		}, 0);
	};

	const dragOver = e => {
		console.log('item dragOver');
		e.preventDefault();
	};

	return (
		<div
			id={id}
			className={'item'}
			draggable={draggable}
			onDragStart={dragStart}
			onDragOver={dragOver}>
			<p className={'item-title'}>Card</p>
			<p className={'item-status'}>Status</p>
		</div>
	);
};

export default Item;
