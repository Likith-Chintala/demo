/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { combineReducers } from 'redux';
import testReducer from './test-reducers';

const appReducer = combineReducers({
    testResources: testReducer,
});

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

export { rootReducer, appReducer };
