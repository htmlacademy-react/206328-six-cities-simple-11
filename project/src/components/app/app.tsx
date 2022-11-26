import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../../pages/login';
import { MainScreen } from '../../pages/main-screen';
import { NotFound } from '../../pages/not-found';
import { Room } from '../../pages/room';
import { useAppDispatch,useAppSelector } from '../../hooks';
import { getCities, getOffers } from '../../store/action';
import { getOffersByCity } from '../../mocks/offers';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.selectedCity);
  const sortingState = useAppSelector((state) => state.sortingState);

  useEffect(() => {
    dispatch(getCities());
    dispatch(getOffers({ offers: getOffersByCity(city?.title ?? 'Paris', sortingState )}));
  }, [city, sortingState, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/offer/:id' element={<Room />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
