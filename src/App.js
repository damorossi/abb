import logo from './logo.svg';
import './app.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { startFetch } from './store/features/feature-actions';

function App() {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => {
		return state.features;
	});
	useEffect(() => {
		if (!items || items.length === 0) {
			dispatch(startFetch());
		}
	}, [dispatch, items]);

	return (
		<>
			<h1>Part 1</h1>
			{items.length}
			{items.map(({ feature }) => (
				<div className="features-featureItem">
					<h2>Feature {feature.id}</h2>
					<table>
						<thead>
							<th>Control</th>
							<th>Control</th>
							<th>Control</th>
						</thead>

						<tbody>
							{feature.controls.map((control) => (
								<>
									{control?.meassurements?.map((control) => (
										<tr>
											<th>{control.name}</th>
											<th>{control.dev}</th>
											<th>{control.devOutTotal}</th>
										</tr>
									))}
								</>
							))}
						</tbody>
					</table>
				</div>
			))}
		</>
	);
}

export default App;
