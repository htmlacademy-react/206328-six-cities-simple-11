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
>('data/fetchHotels', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Hotels);
  dispatch(loadOffers(data));
});
