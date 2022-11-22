import { useEffect, useState, useRef } from 'react';
import { Form } from '../components/form';
import { Card } from '../components/card';
import type { Offer } from '../types';
import { useParams } from 'react-router-dom';
import { ReviewList } from '../components/review-list';
import { Map } from '../components/map';
import { useAppSelector } from '../hooks';
import { MAX_RATING_VALUE } from '../constants';

export const Room = (): JSX.Element => {
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.selectedCity);
  const { id } = useParams();
  const headerRef = useRef<HTMLHeadingElement>(null);
  const offer = offers.find((item: Offer) => item.id === (Number(id) ?? 0)) as Offer;
  const [selectedPoint, setSelectedPoint] = useState(offer.location);
  const points = offers.map((item: Offer) => item.location);
  const exceptCarrentOffers = offers.filter(
    (item: Offer) => item.id !== offer.id
  );

  const comments = [
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

    'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  ];

  const reviews = [
    {
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      name: 'Max',
      rating: 4,
      date: '10.10.2022',
      avatar: 'img/avatar-max.jpg',
    },
  ];

  useEffect(() => {
    setSelectedPoint(offer.location);
    headerRef?.current?.scrollIntoView();
  }, [offer.location]);

  return (
    <div className='page'>
      <header className='header' ref={headerRef}>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link' href='main.html'>
                <img
                  className='header__logo'
                  src='img/logo.svg'
                  alt='6 cities logo'
                  width='81'
                  height='41'
                />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <div className='header__nav-profile'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>
                      Oliver.conner@gmail.com
                    </span>
                  </div>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='http://localhost:3000'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {offer ? (
        <main className='page__main page__main--property'>
          <section className='property'>
            <div className='property__gallery-container container'>
              <div className='property__gallery'>
                <div className='property__pic-wrapper'>
                  <img
                    className='property__pic'
                    src='img/room.jpg'
                    alt='studio pic'
                  />
                </div>
                <div className='property__pic-wrapper'>
                  <img
                    className='property__pic'
                    src='img/apartment-01.jpg'
                    alt='studio pic'
                  />
                </div>
                <div className='property__pic-wrapper'>
                  <img
                    className='property__pic'
                    src='img/apartment-02.jpg'
                    alt='studio pic'
                  />
                </div>
                <div className='property__pic-wrapper'>
                  <img
                    className='property__pic'
                    src='img/apartment-03.jpg'
                    alt='studio pic'
                  />
                </div>
                <div className='property__pic-wrapper'>
                  <img
                    className='property__pic'
                    src='img/studio-01.jpg'
                    alt='studio pic'
                  />
                </div>
                <div className='property__pic-wrapper'>
                  <img
                    className='property__pic'
                    src='img/apartment-01.jpg'
                    alt='studio pic'
                  />
                </div>
              </div>
            </div>
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
                    <span style={{ width: `${(offer.rating / MAX_RATING_VALUE) * 100}%` }} />
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
                    {offer.host.isPro && <span className='property__user-status' />}
                  </div>
                  <div className='property__description'>
                    {comments.map((comment: string) => (
                      <p key={comment} className='property__text'>
                        {comment}
                      </p>
                    ))}
                  </div>
                </div>
                <section className='property__reviews reviews'>
                  <h2 className='reviews__title'>
                    Reviews &middot;
                    <span className='reviews__amount'>
                      {reviews.length}
                    </span>
                  </h2>
                  <ReviewList reviews={reviews} />
                  <Form />
                </section>
              </div>
            </div>
            {city && (
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
                {exceptCarrentOffers.map((item: Offer) => (
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
