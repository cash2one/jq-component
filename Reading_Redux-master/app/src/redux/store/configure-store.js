/**
 * Created by zhang on 2016/8/22.
 */
'use strict';

import {createStore, applyMiddleware} from 'redux';
import  rootReducer from '../reducer/RootReducer';
import thunk from 'redux-thunk';
const middlewares = [thunk];

const createLogger = require('redux-logger');

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    //redux 日志打印
    middlewares.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}
