import { useAppSelector, useAppDispatch } from '../hooks';
import { setCity } from '../store/action';
import cn from 'classnames';

export const Cities = () => {
  const cities = useAppSelector((state) => state.cities);
  const selectedCity = useAppSelector((state) => state.selectedCity);
  const dispatch = useAppDispatch();

  return (
    <ul className='locations__list tabs__list'>
      {cities.map((item) => (
        <li key={item.name} className='locations__item'>
          <div
            className={cn('locations__item-link tabs__item', { 'tabs__item tabs__item--active': selectedCity?.name === item.name })}
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(setCity({ city: item }))}
          >
            <span>{item.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
