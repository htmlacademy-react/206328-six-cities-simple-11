import {createAction} from '@reduxjs/toolkit';
import { City, Comments, Offer, Offers } from '../types';

export const getCities = createAction('cities/getCities');
export const setCity = createAction<{ city: City }>('cities/setCity');
export const setOffer = createAction<{ offer: Offer }>('offers/setOffer');
export const setSortingState = createAction<{ state: string }>('offers/setSortingState');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadComments = createAction<Comments>('data/loadComments');
export const loadNearby = createAction<Offers>('data/loadNearby');
