import React from 'react';
import { MAX_RATING_VALUE } from '../../constants';
import { useAppSelector } from '../../hooks';

export const Rating = () => {
  const offer = useAppSelector((state) => state.selectedOffer);

  return offer ? (
    <div className='property__rating rating'>
      <div className='property__stars rating__stars'>
        <span
          style={{
            width: `${(offer.rating / MAX_RATING_VALUE) * 100}%`,
          }}
        />
        <span className='visually-hidden'>Rating</span>
      </div>
      <span className='property__rating-value rating__value'>
        {offer.rating}
      </span>
    </div>
  ) : null;
};
