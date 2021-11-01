import React from 'react';
import FeatureControlComponent from './FeatureControlComponent';
import './features.scss';

const FeaturesItemComponent = ({ feature, onClick, displayAllControls }) => {
	const handleClick = () => {
		onClick(feature);
	};

	const getColor = () => {
		let devTotalAverage = 0;
		let meassurementsLength = 0;
		feature.controls.forEach((control) => {
			meassurementsLength += control.meassurements.length;
			devTotalAverage += control.meassurements.reduce((acc, curr) => {
				return acc + curr.devOutTotal;
			}, 0);
		});

		const average = devTotalAverage / meassurementsLength;
		return average < 1 ? 'success' : average > 2 ? 'danger' : 'warning';
	};
	return (
		<div className="item-featureItem" onClick={handleClick}>
			<div className={`item-featureTitle ${getColor()}`}>
				<h2>Feature {feature.id}</h2>
			</div>
			<div className="">
				<div className="item-flexHelper">
					<div className="item-titles">
						<div className="meassurement-itemValues">
							<div>Control</div>
							<div>dev</div>
							<div>Out Total</div>
						</div>
						{displayAllControls && (
							<div className="meassurement-itemValues">
								<div>Control</div>
								<div>dev</div>
								<div>Out Total</div>
							</div>
						)}
					</div>
					{!displayAllControls ? (
						<FeatureControlComponent control={feature.controls[0]} />
					) : (
						feature.controls.map((control) => (
							<div className="item-featureContent">
								<FeatureControlComponent control={control} key={control.id} />
							</div>
						))
					)}
				</div>
			</div>
			<button className="action"> ... </button>
		</div>
	);
};

export default FeaturesItemComponent;
