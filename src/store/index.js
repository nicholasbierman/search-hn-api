import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import searchResults from './searchResults';
import searchTerms from './searchTerms';
import currentSearchTerms from './currentSearch';
import searchFilters from './searchFilters';
import numericFilters from './numericFilters';

const rootReducer = combineReducers({
    searchResults,
    searchTerms,
    currentSearchTerms,
    searchFilters,
    numericFilters,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
}
 else {
        const logger = require('redux-logger').default;
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}
 
const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;