import { MapProps } from '../types';
import { useRef, useEffect, ForwardRefExoticComponent, RefAttributes } from 'react';
import leaflet, { Layer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from './const';
import { useMap } from '../hooks/useMap';

export const withMap = (Component: ForwardRefExoticComponent<RefAttributes<HTMLElement>>) =>
  function Map({ city, points, selectedPoint }: MapProps) {
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

    return <Component ref={mapRef} />;
  };
