import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offers, Offer, Comments } from '../types';
import { State, AppDispatch } from '../types/state';
import { loadComments, loadOffers, setOffer, loadNearby } from './action';
import { APIRoute } from './const';
import { sorted } from './utils';

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
  const filtered = data.filter((item) => item.city.name === state?.selectedCity?.name ?? 'Paris');
  dispatch(loadOffers(sorted(filtered, state.sortingState)));
});

export const fetchHotelAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchHotel', async (arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer>(`${APIRoute.Hotels}/${ arg}`);
  dispatch(setOffer({offer: data}));

});

export const fetchCommentsAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchComments', async (arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Comments>(`${APIRoute.Comments}/${ arg}`);
  dispatch(loadComments(data));
});


export const fetchNearbyAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchNearby', async (arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(`${APIRoute.Hotels}/${ arg}/nearby`);
  dispatch(loadNearby(data));
});
