import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffer, getCities, loadOffers, setSortingState, loadComments, loadNearby } from './action';
import { fetchHotelsAction } from './api-actions';
import { cities } from '../mocks';
import { InitialStateType } from '../types';


const initialState: InitialStateType = {
  cities: [],
  offers: [],
  comments: [],
  nearby: [],
  selectedCity: cities[1],
  selectedOffer: null,
  sortingState: 'Popular',
  isLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getCities, (state) => {
    state.cities = cities;
  }).addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  }).addCase(setOffer, (state, action) => {
    state.selectedOffer = action.payload.offer;
  }).addCase(setCity, (state, action) => {
    state.selectedCity = action.payload.city;
  }).addCase(loadComments, (state, action) => {
    state.comments = action.payload;
  }).addCase(loadNearby, (state, action) => {
    state.nearby = action.payload;
  }).addCase(setSortingState, (state, action) => {
    state.sortingState = action.payload.state;
  }).addCase(fetchHotelsAction.pending, (state) => {
    state.isLoading = true;
  }).addCase(fetchHotelsAction.fulfilled, (state) => {
    state.isLoading = false;
  }).addCase(fetchHotelsAction.rejected, (state) => {
    state.isLoading = false;
  });
});

export { reducer };
