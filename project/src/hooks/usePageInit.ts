import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { fetchCommentsAction, fetchHotelAction, fetchNearbyAction } from '../store/api-actions';
import { citySelector, commentsSelector, nearbySelector, offerSelector } from '../store/data-process/selectors';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import { Offer } from '../types';

export const usePageInit = (id?: string) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchHotelAction(Number(id)));
      dispatch(fetchCommentsAction(Number(id)));
      dispatch(fetchNearbyAction(Number(id)));
    }
  }, [dispatch, id]);

  const city = useAppSelector(citySelector);
  const offer = useAppSelector(offerSelector);
  const comments = useAppSelector(commentsSelector);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const nearby = useAppSelector(nearbySelector);
  const points = nearby.map((item: Offer) => item.location);

  return { city, offer, comments, authStatus, nearby, points };
};
