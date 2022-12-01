/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import * as ActionTypes from '../action-types';

export function fetchRecordsStart(): any {
    return {
        type: ActionTypes.FETCH_RECORDS_START,
        payload: {},
    };
}

export function fetchRecordsSucceeded(results: any): any {
    return {
        type: ActionTypes.FETCH_RECORDS_SUCCEEDED,
        payload: { results },
    };
}

export function fetchRecordsError(error: any): any {
    return {
        type: ActionTypes.FETCH_RECORDS_SUCCEEDED,
        payload: error,
    };
}
