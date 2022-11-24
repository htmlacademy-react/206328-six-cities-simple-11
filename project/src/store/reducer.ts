import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffer, getCities, getOffers } from './action';
import { cities } from '../mocks';
import { InitialStateType } from '../types';


const initialState: InitialStateType = {
  cities: [],
  offers: [],
  selectedCity: null,
  selectedOffer: null
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getCities, (state) => {
    state.cities = cities;
  }).addCase(getOffers, (state, action) => {
    state.offers = action.payload.offers;
  }).addCase(setOffer, (state, action) => {
    state.selectedOffer = action.payload.offer;
  }).addCase(setCity, (state, action) => {
    state.selectedCity = action.payload.city;
  });
});

export { reducer };
