import {createAction} from '@reduxjs/toolkit';
import { City, Offer } from '../types';

export const getCities = createAction('cities/getCities');
export const getOffers = createAction<{ offers: Offer[] }>('offers/getOffers');
export const setCity = createAction<{ city: City }>('cities/setCity');
export const setOffer = createAction<{ offer: Offer }>('offers/setOffer');
