import { fetchApiData } from '../../helpers/api-service';
import types from './../types';

// import { uiStartLoading, uiFinishLoading } from './uiActions';

export const startFetch = () => {
	return (dispatch) => {
		// dispatch(uiStartLoading());
		const data = fetchApiData();
		return dispatch(loadFeatures(data));
	};
};

export const loadFeatures = (results) => {
	return {
		type: types.loadFeatures,
		payload: {
			isLoading: false,
			items: results
		}
	};
};
