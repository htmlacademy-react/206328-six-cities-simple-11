import { useState } from 'react';

export const SortingState = () => {
  const [open, setOpen] = useState(false);
  const [sortingValue, setValue] = useState('Popular');
  const handleOpen = () => setOpen(true);
  const handleChange = (value: string) => {
    setOpen(false);
    setValue(value);
  };

  const sortingTypes = [
    'Popular',
    'Price: low to high',
    'Price: high to low',
    'Top rated first',
  ];

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
        {sortingTypes.map((item: string) => (
          <li className='places__option' key={item} tabIndex={0} onClick={() => handleChange(item)}>
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
};
