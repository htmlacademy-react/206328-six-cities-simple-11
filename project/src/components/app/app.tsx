import { MainScreen } from '../../pages/MainScreen';
import type { Props } from '../../types';

function App({ cards }: Props): JSX.Element {
  return <MainScreen cards={cards}/>;
}

export default App;
