import { useRef, useState, useEffect } from 'react';
import leaflet from 'leaflet';
import type { Map as MapType } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from './const';
import { City, MapProps } from '../../types';


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

export const Map = ({ city, points, selectedPoint }: MapProps) => {
  const mapRef = useRef(null);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.lat,
              lng: point.lng,
            },
            {
              icon: point.lat === selectedPoint?.lat && point.lng === selectedPoint?.lng ? currentCustomIcon : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points]);

  return <section className="cities__map map" ref={mapRef}></section>;
};
