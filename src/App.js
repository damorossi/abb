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
	};

	// Simulate fetch data every 10 secs
	const loadData = () => {
		setTimeout(() => {
			dispatch(startFetch());
			loadData();
		});
	};

	// call to constant data fetching
	setTimeout(() => {
		loadData();
	}, 10000);
	return (
		<>
			<div className="features-listContainer">
				{selectedItem && (
					<div className="loquesea">
						<div className="item-selectedFeature">
							<FeaturesItemComponent feature={selectedItem} onClick={selectItem} displayAllControls={true} />
						</div>
					</div>
				)}
				<div className="features-container">
					{items.map(({ feature }) => (
						<FeaturesItemComponent onClick={selectItem} feature={feature} key={feature.id.toString()} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;
