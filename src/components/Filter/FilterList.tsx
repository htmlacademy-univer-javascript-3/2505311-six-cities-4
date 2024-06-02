import {FilterOption} from './FilterOption.tsx';
import {FilterType} from '../../types/offer.ts';

type FilterListProps = {
  currentFilter: string;
  handleCurrentFilter: (filterType: string) => void;
  handleOfferSort: (sortBy: string) => void;
}

export function FilterList({ currentFilter, handleCurrentFilter, handleOfferSort}: FilterListProps): JSX.Element {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {Object.values(FilterType).map((value) => (
        <FilterOption key={value} filterType={value} currentFilter={currentFilter} handleCurrentFilter={handleCurrentFilter} handleOfferSort={handleOfferSort}></FilterOption>
      ))}
    </ul>
  );
}
