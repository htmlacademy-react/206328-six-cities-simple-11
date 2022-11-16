import React from 'react';
import { withMap } from '../hoc/with-map';

// eslint-disable-next-line react/display-name
const Wrapper = React.forwardRef<HTMLElement>(
  (_, ref) => (
    <section className='property__map map' ref={ref}></section>
  )
);

export const Map = withMap(Wrapper);
