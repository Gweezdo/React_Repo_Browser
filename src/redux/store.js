import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//takes an infinite number of middlewares to add to the array
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;