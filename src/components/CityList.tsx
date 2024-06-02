import {cities, City} from '../types/city.ts';

type CityProps = {
  selectedCity: City;
  changeCity: (city: City) => void;
}

export function CityList({selectedCity, changeCity}: CityProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name} onClick={() => changeCity(city)}>
          <a className={`locations__item-link tabs__item ${(city.name === selectedCity.name) ? 'tabs__item--active' : ''}`} >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
