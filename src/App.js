import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { startFetch } from './store/features/feature-actions';
import FeaturesItemComponent from './components/FeaturesItemComponent';
import './app.scss';

function App() {
	const dispatch = useDispatch();
	const [selectedItem, setItem] = useState(null);
	const { items } = useSelector((state) => {
		return state.features;
	});
	useEffect(() => {
		dispatch(startFetch());
	}, [dispatch, items]);

	const selectItem = (item) => {
		setItem(item);
		console.log('ey', item);
	};

	return (
		<>
			<h1>Part 1</h1>
			<div className="features-listContainer">
				{selectedItem && (
					<div className="features-selectedFeature">
						<FeaturesItemComponent feature={selectedItem} onClick={selectItem} displayAllControls={true} />
					</div>
				)}
				<div className="features-container">
					{items.map(({ feature }) => (
						<FeaturesItemComponent onClick={selectItem} feature={feature} key={feature.id} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;
