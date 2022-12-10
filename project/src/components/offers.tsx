import { useCallback, useState } from 'react';
import { Offer, Location } from '../types';
import { Card } from './card';
import { Map } from './map';
import { useAppSelector } from '../hooks';
import { SortingState } from './sorting-state';
import { citySelector, offersSelector } from '../store/selectors';
import { NoPlacesAvalible } from './no-places-avalible';

export const Offers = (): JSX.Element => {
  const offers = useAppSelector(offersSelector);
  const city = useAppSelector(citySelector);
  const points = offers.map((item: Offer) => item.location);
  const [selectedPoint, setSelectedPoint] = useState<Location | null>(null);

  const onListItemHover = useCallback((listItemId: number) => {
    const offer = offers.find((item: Offer) => item.id === listItemId);
    if (offer) {
      setSelectedPoint(offer.location);
    }
  }, [offers]);

  return (
    <div className='cities'>
      {offers.length > 0 ? (
        <div className='cities__places-container container'>
          <section
            className='cities__places places'
            style={{ marginTop: 0, paddingBottom: 0 }}
          >
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>
              {offers.length} places to stay in {city?.name}
            </b>
            <SortingState />
            <div
              className='cities__places-list places__list tabs__content'
              style={{ height: 620, overflow: 'auto' }}
            >
              {offers.map((offer: Offer) => (
                <Card
                  key={offer.id}
                  offer={offer}
                  onListItemHover={onListItemHover}
                />
              ))}
            </div>
          </section>
          <div className='cities__right-section'>
            {city && (
              <Map
                city={city}
                points={points}
                selectedPoint={selectedPoint}
                className='cities__map map'
              />
            )}
          </div>
        </div>
      ) : <NoPlacesAvalible />}
    </div>
  );
};
