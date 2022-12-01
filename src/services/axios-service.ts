/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import AppConstants from '../models/app-constants-model';

axios.defaults.headers.common['Content-Type'] = 'application/json';
export function setAuthHeader(token?: string): void {
    axios.defaults.headers.common.Authorization = token ? `JWT ${token}` : '';
    localStorage.setItem(AppConstants.LOCAL_AUTH_KEY, token || '');
}

const interceptor = (): void => {
    axios.interceptors.request.use(
        (conf: any) => {
            return conf;
        },
        (error: any) => {
            return Promise.reject(error);
        },
    );

    axios.interceptors.response.use(
        (next: any) => {
            return Promise.resolve(next);
        },
        (error: any) => {
            // store.dispatch();
            return Promise.reject(error);
        },
    );
};
export default interceptor;
