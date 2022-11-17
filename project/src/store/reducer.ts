import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';
import { offers } from '../mocks';

const initialState = {
  city: {
    title: 'Амстердам',
    lat: 52.377956,
    lng: 4.89707,
    zoom: 10,
  },
  offers: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state) => {
    state.city = {
      title: 'Амстердам',
      lat: 52.377956,
      lng: 4.89707,
      zoom: 10,
    };
  }).addCase(setOffers, (state) => {
    state.offers = offers;
  });
});

export { reducer };
