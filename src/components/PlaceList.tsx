import PlaceCard from './PlaceCard';
import {FilterType, Offer} from '../types/offer.ts';

type PlaceListProps = {
  places?: Offer[];
  listType: 'base' | 'near';
  onHover?: (id: string | null) => void;
  sortedBy?: string;
};

export default function PlaceList({places, listType, onHover, sortedBy}: PlaceListProps) {
  let sortedPlaces = places;
  if (sortedBy) {
    switch (sortedBy) {
      case FilterType.LowToHigh:
        sortedPlaces = places?.sort((a, b) => a.price - b.price);
        break;
      case FilterType.HighToLow:
        sortedPlaces = places?.sort((a, b) => b.price - a.price);
        break;
      case FilterType.TopRated:
        sortedPlaces = places?.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
    }
  }
  return (
    <>
      {sortedPlaces && (
        <div className={`${listType === 'base' ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}>
          {sortedPlaces?.map((offer) => <PlaceCard offer={offer} onHover={onHover} key={offer.id}/>)}
        </div>
      )}
      {listType === 'near' && (!places || places?.length === 0) && (
        <div className={'near-places__list places__list'}>
          No places to stay available
        </div>
      )}
    </>);
}
