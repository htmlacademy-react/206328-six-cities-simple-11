import { useRef, useState, useEffect } from 'react';
import leaflet from 'leaflet';
import type { Map as MapType } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

const useMap = (
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
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
};

export const Map = () => {
  const mapRef = useRef(null);

  const CITY: City = {
    title: 'Амстердам',
    lat: 52.3609553943508,
    lng: 4.85309666406198,
    zoom: 10,

  };

  useMap(mapRef, CITY);

  return <section className='cities__map map' ref={mapRef}></section>;
};
