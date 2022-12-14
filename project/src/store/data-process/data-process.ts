import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { DataProcess } from '../../types/state';
import { fetchHotelsAction } from '../api-actions';
import { cities } from '../../constants';
import { loadComments, loadNearby, loadOffers, setCity, setOffer, setSortingState } from '../action';

export const initialState: DataProcess = {
  offers: [],
  comments: [],
  nearby: [],
  selectedCity: cities[1],
  selectedOffer: null,
  sortingState: 'Popular',
  isLoading: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffers, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(setOffer, (state, action) => {
        state.selectedOffer = action.payload.offer;
      })
      .addCase(setCity, (state, action) => {
        state.selectedCity = action.payload.city;
      })
      .addCase(loadComments, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(loadNearby, (state, action) => {
        state.nearby = action.payload;
      })
      .addCase(setSortingState, (state, action) => {
        state.sortingState = action.payload.state;
      })
      .addCase(fetchHotelsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHotelsAction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchHotelsAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
