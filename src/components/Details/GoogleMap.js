import React from 'react';
import styled from 'styled-components';

const Map = styled.div`
  padding: 0.5rem 0;
  iframe{
    width: 25vw;
  }
`;

const GoogleMap = ({ lat, lng }) => {
  return (
    <Map>
      <iframe
        height="250"
        style={{ border: "none" }}
        title="flighLaunchPad"
        framerborder="0"
        src={`https://www.google.com/maps/embed/v1/view?key=${process.env.REACT_APP_GOOGLE_API_KEY}&center=${lat},${lng}&zoom=12`}
      />
    </Map>
  )
}

export default GoogleMap
