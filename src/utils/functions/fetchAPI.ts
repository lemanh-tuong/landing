import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { CANCEL } from 'redux-saga';

const { CancelToken } = axios;

export default function fetchAPI<T>(config: AxiosRequestConfig): AxiosPromise<T> {
  const source = CancelToken.source();
  const request: any = axios({
    ...config,
    cancelToken: source.token,
  });
  request[CANCEL] = source.cancel;

  return request;
}
