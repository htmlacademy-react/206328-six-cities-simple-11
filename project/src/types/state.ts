import { City, Comments, Offer } from '.';
import { AuthorizationStatus } from '../constants';
import { store } from '../store';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type DataProcess = {
  offers: Offer[];
  nearby: Offer[];
  comments: Comments;
  selectedCity: City | null;
  selectedOffer: Offer | null;
  sortingState: string;
  isLoading: boolean;
  error: string | null;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type InitialStateType = {
  offers: Offer[];
  nearby: Offer[];
  comments: Comments;
  selectedCity: City | null;
  selectedOffer: Offer | null;
  sortingState: string;
  isLoading: boolean;
  error: string | null;
}
