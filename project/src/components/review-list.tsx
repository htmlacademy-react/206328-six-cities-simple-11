import { ReviewListProps } from '../types';
import { ReviewItem } from './review-item';

export const ReviewList = ({ comments }: ReviewListProps) => (
  <ul className='reviews__list'>
    {comments.map((comment) => (
      <ReviewItem comment={comment} key={comment.id} />
    ))}
  </ul>
);
