import { MainScreen } from '../../pages/main-screen';
import type { Props } from '../../types';

function App({ cards }: Props): JSX.Element {
  return <MainScreen cards={cards}/>;
}

export default App;
