/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, call } from 'redux-saga/effects';
import { testSagas } from './test-sagas';

export default function* rootSaga() {
    yield all([call(testSagas)]);
}
