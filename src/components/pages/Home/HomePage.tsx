import {useState} from 'react';
import PlaceList from '../../PlaceList';
import Map from '../../Map';
import {CityList} from '../../CityList.tsx';
import {changeCity} from '../../../store/action.ts';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../../const.ts';
import Header from '../../Header.tsx';

export default function HomePage() {
  const [hoveredOffer, setHoveredOffer] = useState<string | null>(null);
  const dispatch = useDispatch();
  const city = useSelector((state: State) => state.city);
  const offers = useSelector((state: State) => state.offers);
  const offerCount = offers.length;

  return (
    <div className="page page--gray page--main">
      <Header />
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
              <Map location={city.location} hoveredOffer={hoveredOffer} type={'cities'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
