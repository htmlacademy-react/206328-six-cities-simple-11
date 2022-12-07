import { Offers } from '../components/offers';
import { Cities } from '../components/cities';
import { Spinner } from '../components/spinner/spinner';
import { useAppSelector, useAppDispatch } from '../hooks';
import { State } from '../types/state';
import { Link } from 'react-router-dom';
import { logoutAction } from '../store/api-actions';
import { AuthorizationStatus } from '../constants';

export const MainScreen = () => {
  const isLoading = useAppSelector((state: State) => state.isLoading);
  const authStatus = useAppSelector(
    (state: State) => state.authorizationStatus
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <div className='header__logo-link header__logo-link--active'>
                <img
                  className='header__logo'
                  src='img/logo.svg'
                  alt='6 cities logo'
                  width='81'
                  height='41'
                />
              </div>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                {authStatus === AuthorizationStatus.Auth && (
                  <li className='header__nav-item user'>
                    <div className='header__nav-profile'>
                      <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                      <span className='header__user-name user__name'>
                        Oliver.conner@gmail.com
                      </span>
                    </div>
                  </li>
                )}
                <li className='header__nav-item'>
                  <div className='header__nav-link'>
                    <Link
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                      className='header__signout'
                      to='/login'
                    >
                      {authStatus === AuthorizationStatus.Auth
                        ? 'Sign out'
                        : 'Sing in'}
                    </Link>
                  </div>
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
        {isLoading ? <Spinner /> : <Offers />}
      </main>
    </>
  );
};
