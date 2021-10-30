import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { featureReducers } from './features/feature-reducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
	features: featureReducers
});

const configureStore = (initialState) => createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
