import { Form } from '../components/form/form';
import { Card } from '../components/card';
import type { Offer } from '../types';
import { useParams } from 'react-router-dom';
import { Gallery } from '../components/property/gallery';
import { Rating } from '../components/property/rating';
import { ReviewList } from '../components/property/review-list';
import { Map } from '../components/map';
import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from '../constants';
import { Header } from '../components/header';
import { Host } from '../components/property/host';
import { Inside } from '../components/property/inside';
import { Features } from '../components/property/features';
import { usePageInit } from '../hooks/usePageInit';
import { authStatusSelector, citySelector, commentsSelector, nearbySelector, offerSelector } from '../store/selectors';

export const Room = (): JSX.Element => {
  const { id } = useParams();
  const city = useAppSelector(citySelector);
  const offer = useAppSelector(offerSelector);
  const comments = useAppSelector(commentsSelector);
  const authStatus = useAppSelector(authStatusSelector);
  const nearby = useAppSelector(nearbySelector);
  const points = nearby.map((item: Offer) => item.location);

  usePageInit(id);

  return (
    <div className='page'>
      <Header withBtn />

      {offer ? (
        <main className='page__main page__main--property'>
          <section className='property'>
            <Gallery images={offer.images} />
            <div className='property__container container'>
              <div className='property__wrapper'>
                {offer.isPremium && (
                  <div className='property__mark'>
                    <span>Premium</span>
                  </div>
                )}
                <div className='property__name-wrapper'>
                  <h1 className='property__name'>{offer.title}</h1>
                </div>
                <Rating />
                <Features />
                <div className='property__price'>
                  <b className='property__price-value'>&euro;{offer.price}</b>
                  <span className='property__price-text'>&nbsp;night</span>
                </div>
                <Inside />
                <Host />
                <section className='property__reviews reviews'>
                  <h2 className='reviews__title'>
                    Reviews &middot;
                    <span className='reviews__amount'>{comments.length}</span>
                  </h2>
                  <ReviewList comments={comments} />
                  {authStatus === AuthorizationStatus.Auth && <Form />}
                </section>
              </div>
            </div>
            {city && (
              <Map
                city={city}
                points={points}
                selectedPoint={null}
                className='property__map map'
              />
            )}
          </section>
          <div className='container'>
            <section className='near-places places'>
              <h2 className='near-places__title'>
                Other places in the neighbourhood
              </h2>
              <div className='near-places__list places__list'>
                {nearby.map((item: Offer) => (
                  <Card key={item.id} offer={item} />
                ))}
              </div>
            </section>
          </div>
        </main>
      ) : (
        <div className='container' style={{ height: '90vh', display: 'flex' }}>
          <div style={{ margin: 'auto' }}>Room not found!</div>
        </div>
      )}
    </div>
  );
};
