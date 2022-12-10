import React from 'react';
import { useAppSelector } from '../../hooks';
import { offerSelector } from '../../store/data-process/selectors';

export const Features = () => {
  const offer = useAppSelector(offerSelector);

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
