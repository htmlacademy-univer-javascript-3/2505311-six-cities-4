import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ApiRoute, AppDispatch, LoadingStatus} from '../const.ts';
import {loadOffers, setAuthStatus, setLoadingStatus, setUser, updateOffer} from './action.ts';
import {Comment, Offer} from '../types/offer.ts';
import {AuthorizationStatus, PrivateUser, User} from '../types/user.ts';
import {deleteToken, setToken} from '../api/token.ts';


type ThunkApiConfig = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

type UserLogin = {
  email: string;
  password: string;
};

export const fetchOffers = createAsyncThunk<Offer[], undefined, ThunkApiConfig>(
  'fetchOffers',
  async (_arg, {extra: api, dispatch}) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(setLoadingStatus(LoadingStatus.Success));
    dispatch(loadOffers(data));
    return data;
  }
);

export const fetchOffer = createAsyncThunk<Offer, Offer['id'], ThunkApiConfig>(
  'fetchOffer',
  async (offerId, {extra: api, dispatch}) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    const {data: offer} = await api.get<Offer>(`${ApiRoute.Offers}/${offerId}`);
    const {data: comments} = await api.get<Comment[]>(`${ApiRoute.Reviews}/${offerId}`);
    const {data: nearPlaces} = await api.get<Offer[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    offer.comments = comments;
    offer.nearPlaces = nearPlaces;
    dispatch(updateOffer(offer));
    dispatch(setLoadingStatus(LoadingStatus.Success));
    return offer;
  }
);

export const checkAuth = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<PrivateUser>(ApiRoute.Login);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
      dispatch(setUser(data));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const login = createAsyncThunk<PrivateUser, UserLogin, ThunkApiConfig>(
  'user/login',
  async (userLogin: UserLogin, {dispatch, extra: api}) => {
    const {data} = await api.post<PrivateUser>(ApiRoute.Login, userLogin);
    setToken(data.token);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
    dispatch(setUser(data));
    return data;
  },
);

export const logout = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    deleteToken();
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    dispatch(setUser(undefined));
  }
);

export const postComment = createAsyncThunk<void, Comment, ThunkApiConfig>(
  'comment/postComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    await api.post<User>(`/comments/${id}`, {comment, rating});
    dispatch(fetchOffer(id));
    dispatch(setLoadingStatus(LoadingStatus.Success));
  },
);
