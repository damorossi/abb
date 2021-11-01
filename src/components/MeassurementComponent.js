import React from 'react';
import './meassurement.scss';

const MeassurementComponent = ({ meassurements }) => {
	const { dev, devOutTotal, id, name, value } = meassurements;
	return (
		<div className="meassurement-container">
			<div className="meassurement-itemValues">
				<div className="meassurement-name">{name}</div>
				<div>{dev}</div>
				<div>{devOutTotal}</div>
				<span className={`status ${devOutTotal < 1 ? 'success' : devOutTotal > 2 ? 'danger' : 'warning'}`}></span>
			</div>
		</div>
	);
};

export default MeassurementComponent;
