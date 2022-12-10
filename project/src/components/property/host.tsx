import React from 'react';
import { useAppSelector } from '../../hooks';
import { offerSelector } from '../../store/selectors';

export const Host = () => {
  const offer = useAppSelector(offerSelector);

  return offer ? (
    <div className='property__host'>
      <h2 className='property__host-title'>Meet the host</h2>
      <div className='property__host-user user'>
        <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
          <img
            className='property__avatar user__avatar'
            src={offer.host.avatarUrl}
            width='74'
            height='74'
            alt='Host avatar'
          />
        </div>
        <span className='property__user-name'>
          {offer.host.name}
        </span>
        {offer.host.isPro && (
          <span className='property__user-status' />
        )}
      </div>
      <div className='property__description'>
        <p key={offer.id} className='property__text'>
          {offer.description}
        </p>
      </div>
    </div>
  ) : null;
};
