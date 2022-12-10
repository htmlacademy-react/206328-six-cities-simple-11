import React from 'react';
import { useAppSelector } from '../../hooks';

export const Features = () => {
  const offer = useAppSelector((state) => state.selectedOffer);

  return offer ? (
    <ul className='property__features'>
      <li className='property__feature property__feature--entire'>
        {offer.type}
      </li>
      <li className='property__feature property__feature--bedrooms'>
        {offer.bedrooms} bedrooms
      </li>
      <li className='property__feature property__feature--adults'>
        Max {offer.maxAdults} adults
      </li>
    </ul>
  ) : null;
};
