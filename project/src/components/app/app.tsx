import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../../pages/login';
import { MainScreen } from '../../pages/main-screen';
import { NotFound } from '../../pages/not-found';
import { Room } from '../../pages/room';
import type { AppProps } from '../../types';

function App({ offers }: AppProps): JSX.Element {
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
