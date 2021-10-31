import React from 'react';
import FeatureControlComponent from './FeatureControlComponent';
import './features.scss';

const FeaturesItemComponent = ({ feature, onClick, displayAllControls }) => {
	const handleClick = () => {
		onClick(feature);
	};

	return (
		<div className="features-featureItem" onClick={handleClick}>
			<div className="features-featureTitle">
				<h2>Feature {feature.id}</h2>
			</div>
			{!displayAllControls ? (
				<FeatureControlComponent control={feature.controls[0]} />
			) : (
				feature.controls.map((control) => (
					<div className="features-featureContent">
						<FeatureControlComponent control={control} key={control.id} />
					</div>
				))
			)}
		</div>
	);
};

export default FeaturesItemComponent;
