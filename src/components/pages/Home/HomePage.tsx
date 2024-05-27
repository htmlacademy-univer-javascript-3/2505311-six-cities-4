import {useState} from 'react';
import {PrivateUser} from '../../../const';
import PlaceList from '../../PlaceList';
import {cityMockAmsterdam} from '../../../mocks/cities';
import Map from '../../Map';
import {CityList} from '../../CityList.tsx';
import {changeCity} from '../../../store/action.ts';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';

export interface HomePageProps {
  user: PrivateUser;
}

export default function HomePage({user}: HomePageProps) {
  const [hoveredOffer, setHoveredOffer] = useState<string | null>(null);
  const dispatch = useDispatch();
  const city = useSelector((state: RootState) => state.city);
  const offers = useSelector((state: RootState) => state.offers);
  const offerCount = offers.length;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="/img/logo.svg"
                  alt="6 cities logo" width="81" height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                    >
                    </div>
                    <span
                      className="header__user-name user__name"
                    >{user.email}
                    </span>
                    <span className="header__favorite-count">{user.favoriteCount}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList selectedCity={city} changeCity={(newCity) => dispatch(changeCity(newCity))} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerCount} places to stay in {city.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul
                  className="places__options places__options--custom"
                >
                  <li className="places__option places__option--active"
                    tabIndex={0}
                  >Popular
                  </li>
                  <li className="places__option" tabIndex={0}>Price: low to
                    high
                  </li>
                  <li className="places__option" tabIndex={0}>Price: high to
                    low
                  </li>
                  <li className="places__option" tabIndex={0}>Top rated first
                  </li>
                </ul>
              </form>
              <PlaceList places={offers} setHoveredOffer={setHoveredOffer} />
            </section>
            <div className="cities__right-section">
              <Map location={cityMockAmsterdam.location} offers={offers} hoveredOffer={hoveredOffer} type={'cities'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
