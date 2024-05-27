import {createAction} from '@reduxjs/toolkit';
import {LoadingStatus} from '../const.ts';
import {City} from '../types/city.ts';
import {Offer} from '../types/offer.ts';
import {AuthorizationStatus, PrivateUser} from '../types/user.ts';

export const changeCity = createAction<City>('changeCity');
export const fillOfferList = createAction<Offer[]>('fillOfferList');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const setLoadingStatus = createAction<LoadingStatus>('setLoadingStatus');
export const highlightMarker = createAction<{ id: string } | null>('highlightMarker');
export const setAuthStatus = createAction<AuthorizationStatus>('setAuthStatus');
export const setUser = createAction<PrivateUser | undefined>('setUser');
