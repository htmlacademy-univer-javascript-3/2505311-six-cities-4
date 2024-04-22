import PlaceCard from './PlaceCard';
import {useState} from 'react';
import {Offer} from '../const';

export default function PlaceList({places} : {places: Offer[]}) {
  const [, setHoveredOffer] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((offer) => (<PlaceCard offer={offer} key={offer.id} onHover={setHoveredOffer}/>))}
    </div>
  );
}
