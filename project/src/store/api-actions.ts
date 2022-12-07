import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppRoute, AuthorizationStatus } from '../constants';
import { dropToken, saveToken } from '../services/token';
import { saveEmail, dropEmail } from '../services/email';
import { Offers, Offer, Comments, UserData, AuthData } from '../types';
import { State, AppDispatch } from '../types/state';
import { loadComments, loadOffers, setOffer, loadNearby, requireAuthorization, setError, redirectToRoute } from './action';
import { APIRoute, TIMEOUT_SHOW_ERROR } from './const';
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

export const postComment = createAsyncThunk<
  void,
  { comment: string; rating: number; id: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/postComment', async ({ id, ...arg } , { dispatch, extra: api }) => {
  await api.post<Comments>(`${APIRoute.Comments}/${id}`, arg);
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

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    saveEmail(email);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dropEmail();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  dispatch(redirectToRoute(AppRoute.Login));
});

export const clearErrorAction = createAsyncThunk<
void,
undefined,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'app/clearError',
  (_arg, { dispatch }) => {
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  }
);
