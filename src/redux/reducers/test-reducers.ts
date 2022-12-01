/* eslint-disable @typescript-eslint/no-explicit-any */
import { createReducer } from '@reduxjs/toolkit';
import { ProcessingType } from '@strobes/components';
import * as TestActionTypes from '../action-types';

const initialState = {
    resources: [],
    processingState: { status: ProcessingType.Idle },
};

function fetchRecordsStart(state: any) {
    return {
        ...state,
        processingState: {
            status: ProcessingType.InProcess,
        },
    };
}

function fetchRecordsSucceeded(state: any, action: any) {
    return {
        ...state,
        resources: action.payload.results,
        error: null,
        processingState: {
            status: ProcessingType.Success,
        },
    };
}

function fetchRecordsError(state: any, action: any) {
    return {
        ...state,
        resources: null,
        error: action.payload,
        processingState: {
            status: ProcessingType.Failure,
        },
    };
}

const testReducer = createReducer(initialState, {
    [TestActionTypes.FETCH_RECORDS_START]: fetchRecordsStart,
    [TestActionTypes.FETCH_RECORDS_ERROR]: fetchRecordsError,
    [TestActionTypes.FETCH_RECORDS_SUCCEEDED]: fetchRecordsSucceeded,
});

export default testReducer;
