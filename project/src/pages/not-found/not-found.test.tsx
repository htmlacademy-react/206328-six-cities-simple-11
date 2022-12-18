import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import { NotFound } from './not-found';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <NotFound />
      </HistoryRouter>
    );

    const headerElement = screen.getByText('This is not the page you are looking for');
    const linkElement = screen.getByText('go back');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
