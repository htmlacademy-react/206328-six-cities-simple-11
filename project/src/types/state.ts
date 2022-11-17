import { City, Offer } from '.';
import { store } from '../store';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type InitialStateType = {
  cities: City[];
  offers: Offer[];
  selectedCity?: City;
  selectedOffer?: Offer;
}
