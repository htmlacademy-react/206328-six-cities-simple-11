import { MapProps } from '../types';
import { useRef, useEffect } from 'react';
import leaflet, { Layer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../hooks/useMap';

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export const Map = ({ city, points, selectedPoint, className }: MapProps) => {
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
    let markers: Layer[];
    if (map) {
      markers = points.map((point) =>
        leaflet
          .marker(
            {
              lat: point.lat,
              lng: point.lng,
            },
            {
              icon:
                point.lat === selectedPoint?.lat &&
                point.lng === selectedPoint?.lng
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map)
      );
    }
    return () => {
      markers?.forEach((marker: Layer) => {
        map?.removeLayer(marker);
      });
    };
  }, [map, points, selectedPoint, currentCustomIcon, defaultCustomIcon]);

  return <section ref={mapRef} className={className} />;
};
