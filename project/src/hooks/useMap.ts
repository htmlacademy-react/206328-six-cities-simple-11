import { useRef, useState, useEffect } from 'react';
import leaflet from 'leaflet';
import type { Map as MapType } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../types';

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
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
};
