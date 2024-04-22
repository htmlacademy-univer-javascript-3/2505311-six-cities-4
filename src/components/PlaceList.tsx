import PlaceCard from './PlaceCard';
import {Offer} from '../const';

export default function PlaceList({places, setHoveredOffer} : {
  places: Offer[];
  setHoveredOffer: (id: string | null) => void;
}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((offer) => (<PlaceCard offer={offer} key={offer.id} onHover={setHoveredOffer}/>))}
    </div>
  );
}
