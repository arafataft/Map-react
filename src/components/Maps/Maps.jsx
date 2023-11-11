/* eslint-disable react/prop-types */
import "./Maps.css";
import Map, { Marker } from "react-map-gl";
import { useEffect } from "react";

const Maps = ({ place }) => {
  useEffect(() => {
    console.log(place?.longitude);
    console.log(place?.latitude);
  }, [place.longitude, place.latitude]);

  return (
    <Map
      className="maps"
      mapboxAccessToken="pk.eyJ1Ijoibmhvc3NlbjIwOCIsImEiOiJjbDE1dmtiYzAwMzU2M3Btd3piaDVub3FqIn0.OGRrQJkKg9irhdpwcxUlWA"
      initialViewState={{
        longitude: 90.39964904382168,
        latitude: 23.864057526512067,
        zoom: 8,
      }}
      mapStyle="mapbox://styles/nhossen208/cl15wl504000p14nzajdwfbvg"
    >
      <Marker longitude={90.498587204924} latitude={23.727969481625}>
        <i
          className="fas fa-map-marker-alt"
        //   style={{ width: '100vh', height: "100vh" }}
        ></i>
      </Marker>
    </Map>
  );
};

export default Maps;