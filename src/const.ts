import {store} from './store';

export enum AppRoute {
  Login = '/login',
  Home = '/',
  Offer = '/offer/:id',
  Favorites = '/favorites'
}

export enum ApiRoute {
  Offers = '/offers',
  Reviews = '/comments',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout'
}

export enum ApiConst {
  baseURL = 'https://14.design.htmlacademy.pro/six-cities',
  RequestTimeout = 5000,
  TokenKeyName = 'six-cities-token'
}

export enum LoadingStatus {
  Idle,
  Pending,
  Success,
  Error
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
