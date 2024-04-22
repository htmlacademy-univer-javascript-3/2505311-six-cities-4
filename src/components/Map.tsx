import {Icon, layerGroup, Marker} from 'leaflet';
import {Location, Offer} from '../const';
import {useEffect, useRef} from 'react';
import useMap from '../hooks/useMap';
import 'leaflet/dist/leaflet.css';

const defaultIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const activeIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

export default function Map({location, offers, hoveredOffer}: {
  location: Location;
  offers: Offer[];
  hoveredOffer: string | null;
}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.map((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          offer.id === hoveredOffer ? activeIcon : defaultIcon
        );
        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, hoveredOffer]);

  return <section className="cities__map map" ref={mapRef} />;
}
