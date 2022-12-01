/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as TestActions from '../actions/test-actions';
import * as TestActionTypes from '../action-types';
import * as Api from '../../services/test-service';

export function* fetchRecords() {
    try {
        // api call
        const response: any[] = yield Api.fetchResources();
        yield put(TestActions.fetchRecordsSucceeded(response));
    } catch (e) {
        yield put(TestActions.fetchRecordsError(e));
    }
}

// watchers
export function* watchFetchRecordsStart() {
    yield takeLatest(TestActionTypes.FETCH_RECORDS_START, fetchRecords);
}

// saga
export function* testSagas(): any {
    yield all([call(watchFetchRecordsStart)]);
}
