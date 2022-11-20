import { useState } from 'react';

export const SortingState = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleChange = () => setOpen(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleOpen}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${ open ? ' places__options--opened' : ''}`}>
        <li className="places__option" tabIndex={0} onClick={handleChange}>
          Popular
        </li>
        <li className="places__option" tabIndex={0} onClick={handleChange}>
          Price: low to high
        </li>
        <li className="places__option" tabIndex={0} onClick={handleChange}>
          Price: high to low
        </li>
        <li className="places__option" tabIndex={0} onClick={handleChange}>
          Top rated first
        </li>
      </ul>
    </form>
  );
};
