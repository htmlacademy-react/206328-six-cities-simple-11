import { useEffect, useState, useRef } from 'react';
import { Form } from '../components/form/form';
import { Card } from '../components/card';
import type { Offer } from '../types';
import { useParams } from 'react-router-dom';
import { ReviewList } from '../components/review-list';
import { Map } from '../components/map';
import { useAppSelector, useAppDispatch } from '../hooks';
import { AuthorizationStatus, MAX_RATING_VALUE } from '../constants';
import { Header } from '../components/header';
import {
  fetchCommentsAction,
  fetchHotelAction,
  fetchNearbyAction,
} from '../store/api-actions';
import { Gallery } from '../components/gellery';

export const Room = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.selectedCity);
  const { id } = useParams();
  const headerRef = useRef<HTMLHeadingElement>(null);
  const offer = useAppSelector((state) => state.selectedOffer);
  const [selectedPoint, setSelectedPoint] = useState(offer?.location);
  const nearby = useAppSelector((state) => state.nearby);
  const points = nearby.map((item: Offer) => item.location);
  const comments = useAppSelector((state) => state.comments);
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchHotelAction(Number(id)));
      dispatch(fetchCommentsAction(Number(id)));
      dispatch(fetchNearbyAction(Number(id)));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (offer) {
      setSelectedPoint(offer?.location);
      headerRef?.current?.scrollIntoView();
    }
  }, [offer]);

  return (
    <div className='page'>
      <div ref={headerRef}>
        <Header withBtn />
      </div>

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
                <div className='property__price'>
                  <b className='property__price-value'>&euro;{offer.price}</b>
                  <span className='property__price-text'>&nbsp;night</span>
                </div>
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
            {city && selectedPoint && (
              <Map
                city={city}
                points={points}
                selectedPoint={selectedPoint}
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
