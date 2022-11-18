import { Offers } from '../components/offers';
import { Cities } from '../components/cities';
import type { City } from '../types';

export const MainScreen = () => {

  const city: City = {
    title: 'Амстердам',
    lat: 52.377956,
    lng: 4.89707,
    zoom: 10,
  };
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a
                className='header__logo-link header__logo-link--active'
                href='https://localhost:3000'
              >
                <img
                  className='header__logo'
                  src='img/logo.svg'
                  alt='6 cities logo'
                  width='81'
                  height='41'
                />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <div className='header__nav-profile'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>
                      Oliver.conner@gmail.com
                    </span>
                  </div>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='https://localhost:3000'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <Cities />
          </section>
        </div>
        <Offers city={city} />
      </main>
    </>
  );
};
