import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import mapboxgl from 'mapbox-gl'

const Map = styled.div`
  height: 30vh;
  top: 0;
  bottom: 0;
  .mapboxgl-ctrl{
    box-sizing: content-box;
  }
`;

const MapBox = ({ lat, lng }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 9,
    });
  })
  return (
    <>
      <Map ref={mapContainer}></Map>
    </>
  )
}

export default MapBox
