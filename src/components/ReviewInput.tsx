import RatingInput from './RatingInput';
import {ChangeEvent, FormEvent, useState} from 'react';
import {AuthorizationStatus} from '../types/user.ts';
import {useAppDispatch, useAppSelector} from '../hooks';
import {postComment} from '../store/api-action.ts';

export default function ReviewInput({offerId} : {offerId: string}) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => setRating(Number(e.target.value));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postComment({
      id: offerId,
      comment,
      rating}));
    setRating(5);
    setComment('');
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingInput onRateChange={handleRatingChange} rating={rating} />
      <textarea
        value={comment}
        onChange={handleCommentChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={comment.length < 50 || comment.length > 300 || authorizationStatus === AuthorizationStatus.NoAuth}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
