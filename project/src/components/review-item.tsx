import { MAX_RATING_VALUE } from '../constants';
import { ReviewItemProps } from '../types';
import { monthNames } from '../constants';

const beautifyDate = (input: string) => {
  const date = new Date(input);
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${monthNames[month]} ${year}`;
};

export const ReviewItem = ({ comment }: ReviewItemProps) => (
  <li className='reviews__item'>
    <div className='reviews__user user'>
      <div className='reviews__avatar-wrapper user__avatar-wrapper'>
        <img
          className='reviews__avatar user__avatar'
          src={comment.user.avatarUrl}
          width='54'
          height='54'
          alt='Reviews avatar'
        />
      </div>
      <span className='reviews__user-name'>{comment.user.name}</span>
    </div>
    <div className='reviews__info'>
      <div className='reviews__rating rating'>
        <div className='reviews__stars rating__stars'>
          <span style={{ width: `${(comment.rating / MAX_RATING_VALUE) * 100}%` }}></span>
          <span className='visually-hidden'>Rating</span>
        </div>
      </div>
      <p className='reviews__text'>
        {comment.comment}
      </p>
      <time className='reviews__time' dateTime={comment.date}>
        {beautifyDate(comment.date)}
      </time>
    </div>
  </li>
);
