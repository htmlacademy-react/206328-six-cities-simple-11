import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offers } from '../types';
import { State, AppDispatch } from '../types/state';
import { loadOffers } from './action';
import { APIRoute } from './const';

export const fetchHotelsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchHotels', async (_arg, { dispatch, extra: api, getState }) => {
  const { data } = await api.get<Offers>(APIRoute.Hotels);
  const state = getState();
  const filtered = data.filter((item) => item.city.name === state?.selectedCity?.title ?? 'Paris');
  dispatch(loadOffers(filtered));
});
