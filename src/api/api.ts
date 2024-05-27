import axios from 'axios';
import { getToken } from './token.ts';
import {ApiConst} from '../const.ts';

export const createApi = () => {
  const api = axios.create({
    baseURL: String(ApiConst.baseURL),
    timeout: Number(ApiConst.RequestTimeout)
  });

  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['x-token'] = token;
    }
    return config;
  });

  return api;
};
