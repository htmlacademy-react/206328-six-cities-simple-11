import React from 'react';
import { useAppSelector } from '../../hooks';
import { offerSelector } from '../../store/selectors';

export const Inside = () => {
  const offer = useAppSelector(offerSelector);

  return offer ? (
    <div className='property__inside'>
      <h2 className='property__inside-title'>What&apos;s inside</h2>
      <ul className='property__inside-list'>
        {offer.goods.map((detail: string) => (
          <li key={detail} className='property__inside-item'>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};
