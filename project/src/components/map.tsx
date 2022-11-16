import React from 'react';
import { withMap } from '../hoc/with-map';
import { MapComponentProps } from '../types';

// eslint-disable-next-line react/display-name
const MapComponent = React.forwardRef<HTMLElement, MapComponentProps>(
  ({ className}, ref) => (
    <section className={className} ref={ref}></section>
  )
);

export const Map = withMap(MapComponent);
