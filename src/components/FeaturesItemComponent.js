import React from 'react';
import './features.scss';
const FeaturesItemComponent = ({ feature }) => {
	return (
		<div className="features-featureItem">
			<div className="features-featureTitle">
				<h2>Feature {feature.id}</h2>
			</div>
			<div className="features-featureContent">
				{feature.controls.map((control) => (
					<div className="itemValuesContainer" key={control.id}>
						<div className="item-flexHelper">
							{control?.meassurements?.map((control) => (
								<div className="features-control" key={control.id}>
									<div className="features-itemValues">
										<div>{control.name}</div>
										<div>{control.dev}</div>
										<div>{control.devOutTotal}</div>
										<span
											className={`status ${
												control.devOutTotal < 1 ? 'success' : control.devOutTotal > 2 ? 'danger' : 'warning'
											}`}
										></span>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeaturesItemComponent;
