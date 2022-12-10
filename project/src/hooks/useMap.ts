import { useRef, useState, useEffect } from 'react';
import leaflet from 'leaflet';
import type { Map as MapType } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../types';
import { ZOOM_SCALE_COEFICENT } from '../constants';

export const useMap = (
  mapRef: React.MutableRefObject<null | HTMLDivElement>,
  city: City
) => {
  const [map, setMap] = useState<MapType | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom * ZOOM_SCALE_COEFICENT,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city, map]);

  return map;
};
