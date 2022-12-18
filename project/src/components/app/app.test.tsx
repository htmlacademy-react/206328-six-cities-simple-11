import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';

import App from './app';
import { AppRoute, AuthorizationStatus } from '../../constants';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA: {isLoading: false},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);


describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
    expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
    expect(screen.getByText(/Dusseldorf/i)).toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByText(/Sing in/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('should render "room" when user navigate to /offer/1', () => {
    history.push('/offer/1');

    render(fakeApp);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });


  it('should render "NotFound" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('This is not the page you are looking for')).toBeInTheDocument();
    expect(screen.getByText('go back')).toBeInTheDocument();
  });

});
