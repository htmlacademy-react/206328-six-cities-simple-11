import { useAppSelector } from '../hooks';

export const Cities = () => {
  const cities = useAppSelector((state) => state.cities);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => (
        <li key={item.lat} className="locations__item">
          <a
            className="locations__item-link tabs__item"
            href="https://localhost:3000"
          >
            <span>{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
