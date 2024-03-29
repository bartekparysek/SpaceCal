import React, { useRef, useEffect } from "react";
import styled from "styled-components";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import rocket from "../../assets/marker.png";

const Map = styled.div`
  height: 30vh;
  top: 0;
  bottom: 0;
  .mapboxgl-ctrl {
    box-sizing: content-box;
  }
`;

const MapBox = ({ launchpad, lat, lng }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 9,
    });

    map.current.on("load", () => {
      map.current.loadImage(rocket, (error, image) => {
        if (error) throw error;
        map.current.addImage("custom-marker", image);
        map.current.addSource("points", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [lng, lat],
            },
            properties: {
              title: `${launchpad.locality} ${launchpad.region}`,
            },
          },
        });
        map.current.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "custom-marker",
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 1.5],
            "text-anchor": "top",
          },
        });
      });
    });
  });
  return (
    <>
      <Map ref={mapContainer}></Map>
    </>
  );
};

export default MapBox;
