import { State } from '../../types/state';
import { NameSpace } from '../const';

export const citySelector = (state: State) => state[NameSpace.Data].selectedCity;
export const offersSelector = (state: State) => state[NameSpace.Data].offers;
export const sortingStateSelector = (state: State) => state[NameSpace.Data].sortingState;
export const offerSelector = (state: State) => state[NameSpace.Data].selectedOffer;
export const loadingSelector = (state: State) => state[NameSpace.Data].isLoading;
export const commentsSelector = (state: State) => state[NameSpace.Data].comments;
export const nearbySelector = (state: State) => state[NameSpace.Data].nearby;
