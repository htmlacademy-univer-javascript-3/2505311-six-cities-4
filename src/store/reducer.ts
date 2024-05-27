import {createReducer} from '@reduxjs/toolkit';
import {cityMockParis} from '../mocks/cities.ts';
import {places} from '../mocks/offers.ts';
import {changeCity, fillOfferList} from './action.ts';


const initialState = {
  city: cityMockParis,
  offers: places,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOfferList, (state, action) => {
      state.offers = action.payload;
    });
});
