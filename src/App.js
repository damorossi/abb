import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { startFetch } from './store/features/feature-actions';
import FeaturesItemComponent from './components/FeaturesItemComponent';
import './app.scss';

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
			<div className="features-container">
				{items.map(({ feature }) => (
					<FeaturesItemComponent feature={feature} key={feature.id} />
				))}
			</div>
		</>
	);
}

export default App;
