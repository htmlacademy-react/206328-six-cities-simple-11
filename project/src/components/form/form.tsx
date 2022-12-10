import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { postComment } from '../../store/api-actions';
import { RatingInput } from './rating-input';

export const Form = () => {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();

  const [state, setState] = useState({
    rating: 0,
    comment: '',
  });


  const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const { value } = event.target;
    setState({
      ...state,
      comment: value,
    });
  };

  const handleSubmit = () => {
    dispatch(postComment({ ...state, id }));
  };

  return (
    <form className='reviews__form form' onSubmit={handleSubmit}>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <RatingInput setState={setState} />
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        value={state.comment}
        placeholder='Tell how was your stay, what you like and what can be improved'
        onChange={handleTextChange}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set
          <span className='reviews__star'>rating</span> and describe your stay
          with at least
          <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={state.comment.length < 50 || state.comment.length > 250}
          title='Length of message should be less than 250 characters'
        >
          Submit
        </button>
      </div>
    </form>
  );
};
