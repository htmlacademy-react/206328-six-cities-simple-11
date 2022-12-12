import { useState, Fragment } from 'react';
import { RatingValues } from '../../constants';

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
      {Object.keys(RatingValues).map((title) => (
        <Fragment key={title}>
          <input
            className='form__rating-input visually-hidden'
            name='rating'
            value={RatingValues[title as keyof typeof RatingValues]}
            id={`${RatingValues[title as keyof typeof RatingValues]}-stars`}
            type='radio'
            onChange={handleRatingChange}
          />
          <label
            htmlFor={`${RatingValues[title as keyof typeof RatingValues]}-stars`}
            className='reviews__rating-label form__rating-label'
            title={title}
          >
            <svg className='form__star-image' width='37' height='33'>
              <use xlinkHref='#icon-star'></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
};
