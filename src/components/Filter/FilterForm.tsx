import {useState} from 'react';
import {FilterList} from './FilterList.tsx';

type FilterFormProps = {
  handleOfferSort: (sortBy: string) => void;
}

export function FilterForm({ handleOfferSort }: FilterFormProps): JSX.Element {
  const [currentFilter, setCurrentFilter] = useState('Popular');
  const [isListOpen, setIsListOpen] = useState(false);
  const handleCurrentFilter = (chosenFilter: string) => {
    setCurrentFilter(chosenFilter);
    setIsListOpen(false);
  };

  const openList = () => {
    setIsListOpen((status) => !status);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={openList}>
        {currentFilter}
        <svg className={`places__sorting-arrow ${isListOpen ? 'open' : ''}`} width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isListOpen && (
        <FilterList
          currentFilter={currentFilter}
          handleCurrentFilter={handleCurrentFilter}
          handleOfferSort={handleOfferSort}
        />
      )}
    </form>
  );
}
