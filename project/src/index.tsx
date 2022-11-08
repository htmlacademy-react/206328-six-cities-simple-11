import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

type Card = number;
const cards: Card[] = [1,2,3,4,5];

root.render(
  <React.StrictMode>
    <App cards={cards} />
  </React.StrictMode>,
);
