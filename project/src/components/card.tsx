import type { CardProps } from '../types';
import { Link } from 'react-router-dom';

export const Card = ({
  offer,
  index,
  onListItemHover,
}: CardProps): JSX.Element => (
  <Link to={`offer/${index}`}>
    <article
      className='cities__card place-card'
      onMouseEnter={() => onListItemHover(offer.id)}
    >
      {offer.premium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <a href='https://localhost:3000'>
          <img
            className='place-card__image'
            src={offer.pic}
            width='260'
            height='200'
            alt='Place'
          />
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='https://localhost:3000'>
            {offer.name}
          </a>
        </h2>
        <p className='place-card__type'>{offer.features.type}</p>
      </div>
    </article>
  </Link>
);
