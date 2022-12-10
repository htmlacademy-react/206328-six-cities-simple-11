import { useState } from 'react';
import cn from 'classnames';
import { setSortingState } from '../store/action';
import { useAppDispatch, useAppSelector } from '../hooks';
import { sortingStateSelector } from '../store/selectors';

export const SortingState = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const sortingValue = useAppSelector(sortingStateSelector);
  const handleOpen = () => setOpen(true);
  const handleChange = (value: string) => {
    setOpen(false);
    dispatch(setSortingState({ state: value }));
  };

  enum sortingTypes {
    Popular = 'Popular',
    PriceLowHigh = 'Price: low to high',
    PriceHighLow = 'Price: high to low',
    TopRated = 'Top rated first',
  }

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0} onClick={handleOpen}>
        {sortingValue}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom${
          open ? ' places__options--opened' : ''
        }`}
      >
        {Object.values(sortingTypes).map((item: string) => (
          <li
            className={cn('places__option', {
              'places__option--active': sortingValue === item,
            })}
            key={item}
            tabIndex={0}
            onClick={() => handleChange(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
};
