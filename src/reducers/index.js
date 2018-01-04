import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import FeatureToggle from './FeatureToggle';

const rootReducer = combineReducers({
    FeatureToggle,
    router: routerStateReducer
});

export default rootReducer;