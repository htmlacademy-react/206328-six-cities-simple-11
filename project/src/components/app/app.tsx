import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../../pages/login';
import { MainScreen } from '../../pages/main-screen';
import { NotFound } from '../../pages/not-found';
import { Room } from '../../pages/room';
import { useAppDispatch,useAppSelector } from '../../hooks';
import { getCities, getOffers, setCity } from '../../store/action';
import { getOffersByCity } from '../../mocks/offers';
import { getCityByName } from '../../mocks/cities';
import { City } from '../../types';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.selectedCity);

  useEffect(() => {
    dispatch(getCities());
    dispatch(setCity({ city: getCityByName(city?.title ?? 'Paris') as City }));
    dispatch(getOffers({ offers: getOffersByCity(city?.title ?? 'Paris')}));
  });

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
