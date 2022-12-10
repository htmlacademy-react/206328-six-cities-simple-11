import { State } from '../types/state';

export const citiesSelector = (state: State) => state.cities;
export const citySelector = (state: State) => state.selectedCity;
export const authStatusSelector = (state: State) => state.authorizationStatus;
export const offersSelector = (state: State) => state.offers;
export const sortingStateSelector = (state: State) => state.sortingState;
export const errorSelector = (state: State) => state.error;
export const offerSelector = (state: State) => state.selectedOffer;
export const loadingSelector = (state: State) => state.isLoading;
export const commentsSelector = (state: State) => state.comments;
export const nearbySelector = (state: State) => state.nearby;
