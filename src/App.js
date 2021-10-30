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

	return <div>hola {items.length}</div>;
}

export default App;
