import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../../pages/login';
import { MainScreen } from '../../pages/main-screen';
import { NotFound } from '../../pages/not-found';
import { Room } from '../../pages/room';
import type { AppProps } from '../../types';
import { useAppDispatch } from '../../hooks';
import { getCities, getOffers } from '../../store/action';

function App({ offers }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCities());
    dispatch(getOffers());
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen offers={offers} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/offer/:id' element={<Room offers={offers} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
