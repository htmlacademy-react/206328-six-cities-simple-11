import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';
import { offers, cities } from '../mocks';
import { InitialStateType } from '../types';


const initialState: InitialStateType = {
  cities: [],
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state) => {
    state.cities = cities;
  }).addCase(setOffers, (state) => {
    state.offers = offers;
  });
});

export { reducer };
