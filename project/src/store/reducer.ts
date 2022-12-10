import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffer, loadOffers, setSortingState, loadComments, loadNearby, requireAuthorization, setError } from './action';
import { fetchHotelsAction } from './api-actions';
import { InitialStateType } from '../types';
import { AuthorizationStatus, cities } from '../constants';


const initialState: InitialStateType = {
  offers: [],
  comments: [],
  nearby: [],
  selectedCity: cities[1],
  selectedOffer: null,
  sortingState: 'Popular',
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, action) => {
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
  }).addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  }).addCase(setError, (state, action) => {
    state.error = action.payload;
  });
});

export { reducer };
