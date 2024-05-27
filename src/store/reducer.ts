import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOfferList, highlightMarker, loadOffers, setLoadingStatus} from './action.ts';
import {LoadingStatus} from '../const.ts';
import {Offer} from '../types/offer.ts';
import {City, defaultCity} from '../types/city.ts';

type StateType = {
  city: City;
  offers: Offer[];
  loadingStatus: LoadingStatus;
  selectedMarker: { id: string } | null;
};

const initialState: StateType = {
  city: defaultCity,
  offers: [],
  loadingStatus: LoadingStatus.Success,
  selectedMarker: null,
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
    .addCase(setLoadingStatus, (state, { payload }) => {
      state.loadingStatus = payload;
    })
    .addCase(highlightMarker, (state, { payload }) => {
      state.selectedMarker = payload;
    });
});
