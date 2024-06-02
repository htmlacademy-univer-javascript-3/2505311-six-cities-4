import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  fillOfferList,
  loadOffers,
  setAuthStatus,
  setLoadingStatus,
  setUser, updateOffer
} from './action.ts';
import {LoadingStatus} from '../const.ts';
import {Offer} from '../types/offer.ts';
import {City, defaultCity} from '../types/city.ts';
import {AuthorizationStatus, PrivateUser} from '../types/user.ts';

type StateType = {
  city: City;
  offers: Offer[];
  currentOffer?: Offer;
  loadingStatus: LoadingStatus;
  authorizationStatus: AuthorizationStatus;
  user?: PrivateUser;
};

const initialState: StateType = {
  city: defaultCity,
  offers: [],
  loadingStatus: LoadingStatus.Success,
  authorizationStatus: AuthorizationStatus.NoAuth,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, {payload}) => {
      state.city = payload;
    })
    .addCase(fillOfferList, (state, {payload}) => {
      state.offers = payload;
    })
    .addCase(loadOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(updateOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setLoadingStatus, (state, { payload }) => {
      state.loadingStatus = payload;
    })
    .addCase(setAuthStatus, (state, { payload }) => {
      state.authorizationStatus = payload;
    })
    .addCase(setUser, (state, { payload }) => {
      state.user = payload;
    });
});
