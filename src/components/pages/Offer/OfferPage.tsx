import {useEffect} from 'react';
import ReviewInput from '../../ReviewInput';
import Map from '../../Map';
import {Offer} from '../../../types/offer.ts';
import Header from '../../Header.tsx';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {useParams} from 'react-router-dom';
import PlaceList from '../../PlaceList.tsx';
import {fetchOffer} from '../../../store/api-action.ts';
import Page404 from '../404/Page404.tsx';
import Spinner from '../../Spinner.tsx';

export default function OfferPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const offerId = offers.find((offer) => offer.id === id)?.id ?? '';
  const currentOffer = useAppSelector((state) => state.currentOffer);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOffer(offerId));
    }
  }, [dispatch, offerId]);

  if (!currentOffer) {
    return <Spinner />;
  }

  if (!offerId && !currentOffer) {
    return <Page404 />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer?.images?.map((img) => (
                <div className="offer__image-wrapper" key={img}>
                  <img className="offer__image" src={img} alt={`Photo studio ${currentOffer?.id}`}></img>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer?.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{'width': `calc(${currentOffer?.rating} * 20%)`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer?.type[0].toUpperCase() + currentOffer?.type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer?.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer?.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{currentOffer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer?.goods?.map((item) => (
                    <li className="offer__inside-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={currentOffer?.host.avatarUrl} width={74} height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer?.host.name}
                  </span>
                  {currentOffer?.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer?.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{currentOffer?.comments?.length}</span></h2>
                {currentOffer?.comments && currentOffer?.comments?.map((comment) => (
                  <ul className="reviews__list" key={comment.id}>
                    <li className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src={comment?.user?.avatarUrl} width={54} height={54}
                            alt="Reviews avatar"
                          />
                        </div>
                        <span className="reviews__user-name">
                          {comment?.user?.name}
                        </span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{'width': `calc(${comment.rating} * 20%)`}}/>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          {comment.comment}
                        </p>
                        <time className="reviews__time" dateTime={comment.date}>
                          {new Date(comment?.date ?? '')
                            .toLocaleDateString(undefined, {month: 'long', year: 'numeric'})}
                        </time>
                      </div>
                    </li>
                  </ul>
                ))}
                <ReviewInput offerId={offerId}/>
              </section>
            </div>
          </div>
          <Map location={currentOffer?.location} offers={[currentOffer, ...currentOffer?.nearPlaces?.slice(0, 3) ?? []]} hoveredOffer={offerId ?? ''} type={'offer'}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceList places={currentOffer?.nearPlaces?.slice(0, 3)} listType={'near'}/>
          </section>
        </div>
      </main>
    </div>
  );
}
