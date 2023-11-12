/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer } from '@deck.gl/layers';
import mapboxgl from 'mapbox-gl';
import { Map, MapProvider } from 'react-map-gl';
import { MapView } from 'deck.gl';

const Maps = ({ place }) => {
  const TOKEN = 'pk.eyJ1Ijoic2FyaWthMzQzIiwiYSI6ImNsZno2OHhnaTE3emYzcXF1em5mOHVwaDcifQ.r4d8RIU9Dja96ijziSKBfQ'; 

  const initialViewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
  };
  const locationLong=place?place.longitude:90.365417;
  const locationLat=place?place.latitude:23.822350

  const isValidCoordinate = (coord) => !isNaN(coord) && coord !== null && coord !== undefined;

  const mapRef = useRef(null);
  useEffect(() => {
    if (isValidCoordinate(locationLong) && isValidCoordinate(locationLat)) {
      if (!mapRef.current) {
        mapboxgl.accessToken = TOKEN;
        mapRef.current = new mapboxgl.Map({
          container: 'map-container',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [Number(locationLong), Number(locationLat)],
          zoom: 13,
        });
      } else {
        mapRef.current.setCenter([Number(locationLong), Number(locationLat)]);
      }
    }
  }, [place, TOKEN, locationLong, locationLat]);

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  const data = [
    {
      position: [Number(locationLong), Number(locationLat)],
      size: 100,
      color: [255, 0, 0],
    },
  ];

  const layers = [
    new ScatterplotLayer({
      id: 'scatter-plot',
      data,
      radiusScale: 20,
      
      
    }),
  ];

  const containerStyle = {
    width: '100%',
    height: '100vh',
  };

  return (
    <div id="map-container" style={containerStyle}>
      <MapProvider>
      <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers} >
      <MapView id="map" width="50%" controller={true}>
        <Map mapboxAccessToken={TOKEN} />
      </MapView>
    </DeckGL>
      </MapProvider>
    </div>
  );
};

export default Maps;
