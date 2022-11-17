import { Form } from '../components/form';
import type { Offer, RoomProps, City } from '../types';
import { useParams } from 'react-router-dom';
import { ReviewList } from '../components/review-list';
import { Map } from '../components/map';

export const Room = ({ offers }: RoomProps): JSX.Element => {
  const { id } = useParams();
  const offer = offers[Number(id)];
  const points = offers.map((item: Offer) => item.point);

  const city: City = {
    title: 'Амстердам',
    lat: 52.377956,
    lng: 4.89707,
    zoom: 10,
  };

  return (
    <div className='page'>
      <header className='header'>
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
                {offer.premium && (
                  <div className='property__mark'>
                    <span>Premium</span>
                  </div>
                )}
                <div className='property__name-wrapper'>
                  <h1 className='property__name'>{offer.name}</h1>
                </div>
                <div className='property__rating rating'>
                  <div className='property__stars rating__stars'>
                    <span style={{ width: `${(offer.rating / 5) * 100}%` }} />
                    <span className='visually-hidden'>Rating</span>
                  </div>
                  <span className='property__rating-value rating__value'>
                    {offer.rating}
                  </span>
                </div>
                <ul className='property__features'>
                  <li className='property__feature property__feature--entire'>
                    {offer.features.type}
                  </li>
                  <li className='property__feature property__feature--bedrooms'>
                    {offer.features.bedrooms}
                  </li>
                  <li className='property__feature property__feature--adults'>
                    {offer.features.adults}
                  </li>
                </ul>
                <div className='property__price'>
                  <b className='property__price-value'>&euro;{offer.price}</b>
                  <span className='property__price-text'>&nbsp;night</span>
                </div>
                <div className='property__inside'>
                  <h2 className='property__inside-title'>What&apos;s inside</h2>
                  <ul className='property__inside-list'>
                    {offer.details.map((detail: string) => (
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
                        src={offer.host.avatar}
                        width='74'
                        height='74'
                        alt='Host avatar'
                      />
                    </div>
                    <span className='property__user-name'>
                      {offer.host.name}
                    </span>
                    <span className='property__user-status'>
                      {offer.host.type}
                    </span>
                  </div>
                  <div className='property__description'>
                    {offer.host.comments.map((comment: string) => (
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
                      {offer.reviews.length}
                    </span>
                  </h2>
                  <ReviewList reviews={offer.reviews} />
                  <Form />
                </section>
              </div>
            </div>
            <Map
              city={city}
              points={points}
              selectedPoint={offer.point}
              className='property__map map'
            />
          </section>
          <div className='container'>
            <section className='near-places places'>
              <h2 className='near-places__title'>
                Other places in the neighbourhood
              </h2>
              <div className='near-places__list places__list'>
                <article className='near-places__card place-card'>
                  <div className='near-places__image-wrapper place-card__image-wrapper'>
                    <a href='http://localhost:3000'>
                      <img
                        className='place-card__image'
                        src='img/room.jpg'
                        width='260'
                        height='200'
                        alt='room pic'
                      />
                    </a>
                  </div>
                  <div className='place-card__info'>
                    <div className='place-card__price-wrapper'>
                      <div className='place-card__price'>
                        <b className='place-card__price-value'>&euro;80</b>
                        <span className='place-card__price-text'>
                          &#47;&nbsp;night
                        </span>
                      </div>
                    </div>
                    <div className='place-card__rating rating'>
                      <div className='place-card__stars rating__stars'>
                        <span style={{ width: '80%' }}></span>
                        <span className='visually-hidden'>Rating</span>
                      </div>
                    </div>
                    <h2 className='place-card__name'>
                      <a href='http://localhost:3000'>Wood and stone place</a>
                    </h2>
                    <p className='place-card__type'>Private room</p>
                  </div>
                </article>

                <article className='near-places__card place-card'>
                  <div className='near-places__image-wrapper place-card__image-wrapper'>
                    <a href='http://localhost:3000'>
                      <img
                        className='place-card__image'
                        src='img/apartment-02.jpg'
                        width='260'
                        height='200'
                        alt='Place '
                      />
                    </a>
                  </div>
                  <div className='place-card__info'>
                    <div className='place-card__price-wrapper'>
                      <div className='place-card__price'>
                        <b className='place-card__price-value'>&euro;132</b>
                        <span className='place-card__price-text'>
                          &#47;&nbsp;night
                        </span>
                      </div>
                    </div>
                    <div className='place-card__rating rating'>
                      <div className='place-card__stars rating__stars'>
                        <span style={{ width: '80%' }}></span>
                        <span className='visually-hidden'>Rating</span>
                      </div>
                    </div>
                    <h2 className='place-card__name'>
                      <a href='http://localhost:3000'>
                        Canal View Prinsengracht
                      </a>
                    </h2>
                    <p className='place-card__type'>Apartment</p>
                  </div>
                </article>

                <article className='near-places__card place-card'>
                  <div className='place-card__mark'>
                    <span>Premium</span>
                  </div>
                  <div className='near-places__image-wrapper place-card__image-wrapper'>
                    <a href='http://localhost:3000'>
                      <img
                        className='place-card__image'
                        src='img/apartment-03.jpg'
                        width='260'
                        height='200'
                        alt='Place'
                      />
                    </a>
                  </div>
                  <div className='place-card__info'>
                    <div className='place-card__price-wrapper'>
                      <div className='place-card__price'>
                        <b className='place-card__price-value'>&euro;180</b>
                        <span className='place-card__price-text'>
                          &#47;&nbsp;night
                        </span>
                      </div>
                    </div>
                    <div className='place-card__rating rating'>
                      <div className='place-card__stars rating__stars'>
                        <span style={{ width: '100%' }}></span>
                        <span className='visually-hidden'>Rating</span>
                      </div>
                    </div>
                    <h2 className='place-card__name'>
                      <a href='http://localhost:3000'>
                        Nice, cozy, warm big bed apartment
                      </a>
                    </h2>
                    <p className='place-card__type'>Apartment</p>
                  </div>
                </article>
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
