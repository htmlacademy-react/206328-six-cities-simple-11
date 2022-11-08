import { MainScreen } from '../../pages/main-screen';
import type { AppProps } from '../../types';

function App({ cards }: AppProps): JSX.Element {
  return <MainScreen cards={cards}/>;
}

export default App;
