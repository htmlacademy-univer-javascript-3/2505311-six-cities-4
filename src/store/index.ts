import { configureStore } from '@reduxjs/toolkit';
import {createApi} from '../api/api.ts';
import {reducer} from './reducer.ts';

export const api = createApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
