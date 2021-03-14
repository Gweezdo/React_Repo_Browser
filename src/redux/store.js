import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
import rootReducer from './root-reducer';

//takes an infinite number of middlewares to add to the array
const middlewares = [logger, thunk];

//store takes an initial state as as the second argument in the "createStore() function. If things break add it in"
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;