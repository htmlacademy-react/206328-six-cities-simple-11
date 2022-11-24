import { useState } from 'react';
import { Offer, Point } from '../types';
import { Card } from './card';
import { Map } from './map';
import { useAppSelector } from '../hooks';

export const Offers = (): JSX.Element => {
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.selectedCity);
  const points = offers.map((item: Offer) => item.point);
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);

  const onListItemHover = (listItemId: string) => {
    const offer = offers.find((item: Offer) => item.id === listItemId);
    if (offer) { setSelectedPoint(offer.point); }
  };

  return (
    <div className='cities'>
      <div className='cities__places-container container' style={{ minHeight: 800}}>
        <section className='cities__places places'>
          <h2 className='visually-hidden'>Places</h2>
          <b className='places__found'>
            {offers.length} places to stay in {city?.title}
          </b>
          <form className='places__sorting' action='#' method='get'>
            <span className='places__sorting-caption'>Sort by</span>
            <span className='places__sorting-type' tabIndex={0}>
              Popular
              <svg className='places__sorting-arrow' width='7' height='4'>
                <use xlinkHref='#icon-arrow-select'></use>
              </svg>
            </span>
            <ul className='places__options places__options--custom'>
              <li className='places__option' tabIndex={0}>
                Popular
              </li>
              <li className='places__option' tabIndex={0}>
                Price: low to high
              </li>
              <li className='places__option' tabIndex={0}>
                Price: high to low
              </li>
              <li className='places__option' tabIndex={0}>
                Top rated first
              </li>
            </ul>
          </form>
          <div className='cities__places-list places__list tabs__content'>
            {offers.map((offer: Offer) => (
              <Card key={offer.id} offer={offer} onListItemHover={onListItemHover} />
            ))}
          </div>
        </section>
        <div className='cities__right-section'>
          {city && <Map city={city} points={points} selectedPoint={selectedPoint} className="cities__map map" />}
        </div>
      </div>
    </div>
  );
};
