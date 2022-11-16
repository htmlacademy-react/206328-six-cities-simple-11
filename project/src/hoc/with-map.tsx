import type { ComponentType } from 'react';
import { MapProps } from '../types';

export const withMap = (Component: ComponentType<MapProps>) =>
  function Map(props: MapProps) {
    return <Component {...props} />;
  };
