import { useAppSelector, useAppDispatch } from '../hooks';
import { getOffersByCity } from '../mocks/offers';
import { setCity, getOffers } from '../store/action';

export const Cities = () => {
  const cities = useAppSelector((state) => state.cities);
  const selectedCty = useAppSelector((state) => state.selectedCity);
  const dispatch = useAppDispatch();

  return (
    <ul className='locations__list tabs__list'>
      {cities.map((item) => (
        <li key={item.title} className='locations__item'>
          <div
            className={
              selectedCty?.title === item.title
                ? 'locations__item-link tabs__item tabs__item--active'
                : 'locations__item-link tabs__item'
            }
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dispatch(setCity({ city: item }));
              dispatch(getOffers({ offers: getOffersByCity(item.title) }));
            }}
          >
            <span>{item.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
