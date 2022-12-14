import React from 'react';
import { AuthorizationStatus } from '../constants';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logoutAction } from '../store/api-actions';
import { getEmail } from '../services/email';
import { HeaderProps } from '../types';
import { getAuthorizationStatus } from '../store/user-process/selectors';


export const Header = ({ withBtn }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <div className='header__logo-link'>
              <Link to="/">
                <img
                  className='header__logo'
                  src='img/logo.svg'
                  alt='6 cities logo'
                  width='81'
                  height='41'
                />
              </Link>
            </div>
          </div>
          {withBtn && (
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                {authStatus === AuthorizationStatus.Auth && (
                  <li className='header__nav-item user'>
                    <div className='header__nav-profile'>
                      <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                      <span className='header__user-name user__name'>
                        {getEmail()}
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
          )}
        </div>
      </div>
    </header>
  );
};
