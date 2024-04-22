import {ChangeEvent, Fragment} from 'react';

const rates = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' }
];

type RatingInputProps = {
  rating: number;
  onRateChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function RatingInput({rating, onRateChange}: RatingInputProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {
        rates.map(({ value, title }) => {
          const id = `${value}-stars`;
          return (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={value}
                id={id}
                type="radio"
                checked={value === rating}
                onChange={onRateChange}
              />
              <label
                htmlFor={id}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          );
        })
      }
    </div>
  );
}
