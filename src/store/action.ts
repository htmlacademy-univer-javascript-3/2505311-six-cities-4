import {createAction} from '@reduxjs/toolkit';
import {City, Offer} from '../const.ts';

export const changeCity = createAction<City>('changeCity');
export const fillOfferList = createAction<Offer[]>('fillOfferList');
