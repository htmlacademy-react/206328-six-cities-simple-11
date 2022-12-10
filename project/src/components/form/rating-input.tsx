import { useState } from 'react';
import { ratingValues } from '../../constants';

const useMyState = () =>
  useState({
    rating: 0,
    comment: '',
  });

export type StateType = ReturnType<typeof useMyState>;

export const RatingInput = ({ setState }: { setState: StateType[1] }): JSX.Element => {
  const handleRatingChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;
    setState((state) => ({
      ...state,
      rating: Number(value),
    }));
  };

  return (
    <div className='reviews__rating-form form__rating'>
      {ratingValues.map((title, index) => (
        <>
          <input
            className='form__rating-input visually-hidden'
            name='rating'
            value={5 - index}
            id={`${5 - index}-stars`}
            type='radio'
            onChange={handleRatingChange}
          />
          <label
            htmlFor={`${5 - index}-stars`}
            className='reviews__rating-label form__rating-label'
            title={title}
          >
            <svg className='form__star-image' width='37' height='33'>
              <use xlinkHref='#icon-star'></use>
            </svg>
          </label>
        </>
      ))}
    </div>
  );
};
