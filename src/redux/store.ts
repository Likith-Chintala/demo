// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, appReducer } from './reducers';
import rootSaga from './sagas/root-saga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const isDevEnv = process.env.NODE_ENV === 'development';
const middlewares = [];
if (isDevEnv) {
    middlewares.push(logger);
}
middlewares.push(sagaMiddleware);

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof appReducer>;
export default store;
