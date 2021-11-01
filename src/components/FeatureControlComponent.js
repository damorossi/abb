import React from 'react';
import MeassurementComponent from './MeassurementComponent';
import './control.scss';

const FeatureControlComponent = ({ control }) => {
	return (
		<div className="control-flexHelper">
			{control.meassurements?.map((meassurements) => (
				<MeassurementComponent meassurements={meassurements} key={meassurements.id} />
			))}
		</div>
	);
};

export default FeatureControlComponent;
