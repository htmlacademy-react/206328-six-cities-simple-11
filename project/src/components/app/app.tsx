import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../../pages/login';
import { MainScreen } from '../../pages/main-screen';
import { NotFound } from '../../pages/not-found';
import { Room } from '../../pages/room';
import { useAppDispatch,useAppSelector } from '../../hooks';
import { getCities } from '../../store/action';
import { fetchHotelsAction } from '../../store/api-actions';
import HistoryRouter from '../../components/history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.selectedCity);
  const sortingState = useAppSelector((state) => state.sortingState);

  useEffect(() => {
    dispatch(getCities());
    dispatch(fetchHotelsAction());
  }, [city, sortingState, dispatch]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/offer/:id' element={<Room />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
