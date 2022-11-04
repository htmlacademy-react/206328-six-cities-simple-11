import { Main } from '../../pages/Main';
import type { Props } from '../../types';

function App({ cards }: Props): JSX.Element {
  return <Main cards={cards}/>;
}

export default App;
