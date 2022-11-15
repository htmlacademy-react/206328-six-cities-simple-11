import { ReviewListProps } from '../types';
import { ReviewItem } from './review-item';

export const ReviewList = ({ reviews }: ReviewListProps) => (
  <ul className='reviews__list'>
    {reviews.map((review) => (
      <ReviewItem review={review} key={review.name + review.date} />
    ))}
  </ul>
);
