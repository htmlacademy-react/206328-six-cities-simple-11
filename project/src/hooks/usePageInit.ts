import { useEffect } from 'react';
import { useAppDispatch } from '.';
import { fetchCommentsAction, fetchHotelAction, fetchNearbyAction } from '../store/api-actions';

export const usePageInit = (id?: string) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchHotelAction(Number(id)));
      dispatch(fetchCommentsAction(Number(id)));
      dispatch(fetchNearbyAction(Number(id)));
    }
  }, [dispatch, id]);
};
