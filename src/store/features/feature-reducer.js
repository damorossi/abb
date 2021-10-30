import types from '../types';

const initialState = {
	isLoading: false,
	items: []
};

export const featureReducers = (state = initialState, action) => {
	switch (action.type) {
		case types.loadFeatures:
			return {
				...state,
				isLoading: action.payload.isLoading,
				items: action.payload.items
			};
		default:
			return state;
	}
};
