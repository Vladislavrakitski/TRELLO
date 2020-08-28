import React from 'react';

const DropWrapper = ({ id, children }) => {
	const drop = e => {
		console.log('wrapper drop');
		e.preventDefault();

		const card_id = e.dataTransfer.getData('card_id');
		const card = document.getElementById(card_id);
		card.style.display = 'block';

		e.target.appendChild(card);
	};

	const dragOver = e => {
		console.log('wrapper dragOver');
		e.preventDefault();
	};

	return (
		<div id={id} className={'drop-wrapper'} onDrop={drop} onDragOver={dragOver}>
			{children}
		</div>
	);
};

export default DropWrapper;
