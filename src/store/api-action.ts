import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {ApiRoute, AppDispatch, LoadingStatus} from '../const.ts';
import {loadOffers, setLoadingStatus} from './action.ts';
import {Offer, Comment} from '../types/offer.ts';


type ThunkApiConfig = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
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
    const {data: nearPlaces} = await api.get<Offer[]>(`${ApiRoute.Offers}/${offerId}/nearPlaces`);
    offer.comments = comments;
    offer.nearPlaces = nearPlaces;
    dispatch(setLoadingStatus(LoadingStatus.Success));
    return offer;
  }
);
