import {useState} from 'react';
import PlaceList from '../../PlaceList';
import Map from '../../Map';
import {CityList} from '../../CityList.tsx';
import {changeCity} from '../../../store/action.ts';
import {State} from '../../../const.ts';
import Header from '../../Header.tsx';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {Offer} from '../../../types/offer.ts';
import {FilterForm} from '../../Filter/FilterForm.tsx';

export default function HomePage() {
  const [hoveredOffer, setHoveredOffer] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const city = useAppSelector((state: State) => state.city);
  const offers = useAppSelector((state: State) => state.offers)
    .filter((offer: Offer) => offer.city.name === city.name);
  const offerCount = offers.length;

  const [currentSortType, setCurrentSortType] = useState('Popular');
  const handleCurrentSortType = (updatedSortType: string) => {
    setCurrentSortType(updatedSortType);
  };

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
              <FilterForm handleOfferSort={handleCurrentSortType} />
              <PlaceList places={offers} listType={'base'} onHover={setHoveredOffer} sortedBy={currentSortType}/>
            </section>
            <div className="cities__right-section">
              <Map location={city.location} hoveredOffer={hoveredOffer} offers={offers} type={'cities'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
